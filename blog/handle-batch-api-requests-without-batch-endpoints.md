---
title: Handle Batch API Requests Without Batch Endpoints
description: Learn how to handle batch API requests when servers don't provide batch endpoints. Discover practical solutions to efficiently manage client-side batching.
authors:
- adrian
image: https://unsplash.com/photos/qNjvifFLvnA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZGVhdGh8ZW58MHx8fHwxNzI3NjE5NjI1fDA&force=true&w=480
draft: true
---

APIs are the backbone of modern applications, but they don't always provide the flexibility developers need—especially when it comes to handling batch requests. Sometimes, developers are faced with APIs that don't support batch endpoints, forcing them to make multiple, often slow, sequential requests. This can lead to poor performance, increased latency, and a frustrating user experience.

So, how do you tackle this?

<!-- truncate -->

Let's dive into the challenges developers face when dealing with APIs that lack batch support and explore practical solutions to efficiently handle client-side batching.

---

## The Problem: No Batch Endpoints

When an API doesn't offer a batch request option, developers are left to handle multiple API calls independently. This results in:

- **Increased Latency:** Making several individual API calls sequentially increases the overall response time.
- **Client-Side Complexity:** Developers need to manage multiple requests manually, increasing the chance of errors.
- **Server Load:** Sending too many requests in parallel can overwhelm the server or exceed rate limits, leading to throttling or timeouts.
  
These challenges are common when interacting with third-party APIs or legacy systems that haven't implemented modern features like batch processing.

---

## Practical Solutions for Client-Side Batch Requests

Fortunately, there are several ways to overcome these challenges on the client side by "batching" requests. Whether you're working with JavaScript, TypeScript, or Python, the key is to group your requests and manage them efficiently.

### 1. Group Requests with Axios

**Axios** is a widely used HTTP client that can handle multiple requests in parallel using `axios.all()`. This method allows you to send several API calls at once and handle the responses collectively, simulating a batch request without requiring server-side support.

#### Example:
```javascript
import axios from 'axios';

const getUser = axios.get('/api/user');
const getPosts = axios.get('/api/posts');

axios.all([getUser, getPosts])
  .then(axios.spread((userResponse, postsResponse) => {
    console.log('User:', userResponse.data);
    console.log('Posts:', postsResponse.data);
  }))
  .catch(error => console.log('Error:', error));
```

**Solution:**
- Use `axios.all()` to send requests in parallel.
- Handle responses in a grouped manner using `axios.spread()`.

**Why It Works:** It reduces latency by running multiple requests simultaneously, effectively "batching" them without overwhelming the server.

---

### 2. Use Native JavaScript: Promise.all()

If you prefer not to use external libraries, JavaScript's built-in `Promise.all()` works just as well to handle multiple API requests in parallel.

#### Example:
```javascript
const fetchUser = fetch('/api/user');
const fetchPosts = fetch('/api/posts');

Promise.all([fetchUser, fetchPosts])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    console.log('User:', data[0]);
    console.log('Posts:', data[1]);
  })
  .catch(error => console.error('Error:', error));
```

**Solution:**
- Use `Promise.all()` to execute multiple fetch requests in parallel.
- Once all responses are returned, you can process them in a batch.

**Why It Works:** It improves performance by reducing the number of sequential requests and minimizing wait time between them.

---

### 3. Implement Custom Batching Logic

For situations where you need more control, you can write custom functions to batch requests manually. This involves splitting your requests into smaller groups and sending them over time, either sequentially or in parallel.

#### Example:
```javascript
function batchRequests(requests, batchSize) {
  const batches = [];
  for (let i = 0; i < requests.length; i += batchSize) {
    batches.push(requests.slice(i, i + batchSize));
  }
  return batches;
}

const requests = ['/api/user', '/api/posts', '/api/comments'];

const batched = batchRequests(requests, 2); // Process 2 at a time
batched.forEach(batch => {
  Promise.all(batch.map(endpoint => fetch(endpoint)))
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => console.log('Batch Data:', data))
    .catch(error => console.error('Error:', error));
});
```

**Solution:**
- Split requests into smaller batches using a custom function.
- Process each batch sequentially or with a delay to avoid overwhelming the server.

**Why It Works:** You can fine-tune the number of requests sent at once, ensuring your system doesn't exceed server rate limits while improving response times.

---

### 4. Handling Batch Requests with Rate-Limiting

When sending multiple requests in a short time, you run the risk of hitting API rate limits. Implementing rate-limiting in your client-side logic ensures that your batch requests stay within the server's allowed limits.

#### Example with Axios:
```javascript
import axios from 'axios';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function batchRequests(requests, batchSize, delayTime) {
  for (let i = 0; i < requests.length; i += batchSize) {
    const batch = requests.slice(i, i + batchSize);
    await Promise.all(batch.map(req => axios.get(req)));
    await delay(delayTime); // Throttle requests
  }
}

const requests = ['/api/user', '/api/posts', '/api/comments'];
batchRequests(requests, 2, 1000); // 2 requests per second
```

Another alternative, you can group multiple requests and use [Bottleneck](https://www.npmjs.com/package/bottleneck) to control how many are sent simultaneously, which makes it very useful when dealing with APIs that have rate-limiting but no batch request support.

While Bottleneck is primarily designed to throttle requests, it can be used to group or batch API calls and send them in intervals to avoid exceeding rate limits.

#### Example with Bottleneck:
```javascript
const Bottleneck = require('bottleneck');
const axios = require('axios');

const limiter = new Bottleneck({
  maxConcurrent: 5, // max 5 requests at a time
  minTime: 200 // wait 200 ms between requests
});

const fetchData = (url) => axios.get(url);

const urls = ['/api/user', '/api/posts', '/api/comments'];

urls.forEach(url => {
  limiter.schedule(() => fetchData(url)).then(console.log);
});
```


**Solution:**
- Use a delay between batches to ensure you respect rate limits.
- Adjust the batch size and delay time based on the API's throttling rules.

**Why It Works:** This prevents errors or blocks caused by exceeding API limits while ensuring that requests are processed as quickly as possible.

---

## 5. Managing Requests in Python

For Python developers, you can use libraries like `requests` and `concurrent.futures` to handle batch requests in a similar fashion.

#### Example:
```python
import requests
from concurrent.futures import ThreadPoolExecutor

urls = ['https://api.example.com/user', 'https://api.example.com/posts']

def fetch(url):
    response = requests.get(url)
    return response.json()

with ThreadPoolExecutor(max_workers=2) as executor:
    results = list(executor.map(fetch, urls))

for result in results:
    print(result)
```

**Solution:**
- Use Python's `ThreadPoolExecutor` to send multiple requests concurrently.
- Limit the number of workers to avoid overwhelming the server.

**Why It Works:** This enables batching of requests while taking advantage of multithreading to improve efficiency.

---

## Bonus: Leveraging GraphQL for Batching

If the API supports **GraphQL**, you can achieve batch-like behavior by combining multiple queries in one request, eliminating the need for client-side batching altogether.

#### Example:
```graphql
{
  user(id: "1") {
    name
    email
  }
  posts {
    title
    content
  }
}
```

**Solution:**
- Send multiple queries in a single request using GraphQL.

**Why It Works:** GraphQL allows you to request only the data you need in one call, making it ideal for reducing client-side complexity and latency.

---

## Conclusion: Taking Control of API Batching

Even when servers don't provide explicit batch endpoints, developers can implement strategies on the client side to manage and optimize requests. Whether it's using Axios, native `Promise.all()`, or custom batching functions, these techniques help reduce latency, avoid rate limits, and ensure that APIs perform efficiently in any scenario.

By implementing these solutions, you'll be able to build more responsive, scalable applications while keeping user experience smooth and consistent.

---

Are you struggling with API performance? Try out our new API tools at [APICove.com](https://apicove.com) and simplify how you interact with your APIs—batch requests, test, and develop faster today!