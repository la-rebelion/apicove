---
title: "Optimizing API Responses for Mobile: Reduce the Payload"
description: "Learn how to optimize API responses for mobile clients by reducing payloads and boosting performance. Transform large responses using a proxy server."
image: https://unsplash.com/photos/TluMvvrZ57g/download?force=true&w=480
authors:
- adrian
---

Imagine you're browsing your favorite website on your mobile device. The page is slow to load, the images are taking forever to appear, and your data is quickly getting consumed. Now imagine the same frustration for your users when your web app integrates with APIs that deliver large, unoptimized payloads. This is a common issue when integrating APIs into mobile web applications—large payloads result in slow performance and high data usage.

In this blog post, we'll discuss how to tackle the problem of large API responses for mobile clients, propose practical solutions, and walk through two ways to solve this issue: using **HAProxy** and **NGINX** to reduce API payload sizes and optimize performance.

<!-- truncate -->

## The Problem: Large API Responses on Mobile

Mobile devices are often limited by slower connections and smaller data plans compared to desktops or Wi-Fi-connected devices. When API responses are too large, they:

- Increase **loading times** and reduce the responsiveness of your app.
- Drain **data** from users' mobile plans.
- Cause **higher bounce rates** as users lose patience waiting for the page to load.

This is particularly problematic when the API returns unnecessary data fields, high-resolution images, or large sets of records that aren't optimized for mobile consumption.

---

## The Solution: Optimizing API Requests for Mobile

To overcome this, you can implement one or both of the following strategies:

1. **Optimize API Requests on the Client Side**: Only request the fields you need, reduce payload size, and compress responses.
2. **Use a Proxy Server for Compression and Transformation**: If you don't control the API and can't change the response structure, you can leverage a proxy server like HAProxy or NGINX to compress or transform responses before they hit the client.

Let's go through the steps to implement both solutions.

---

## Solution 1: Optimize API Requests for Mobile

### Step 1: Request Only Necessary Data
Most APIs provide more data than you'll use, and this can be a problem on mobile. Limit the data fetched from the API to only what you need. You can do this by:

- **Using query parameters** or filtering options in the request body to specify which fields you need. For instance, if an API returns an entire user profile but you only need the username and profile picture, request just those fields.
  
  Example for a REST API:
  ```bash
  GET /api/users/123?fields=username,profile_picture
  ```

### Step 2: Enable Compression (GZIP)
Many APIs support response compression using GZIP or Brotli. Compressing large JSON or XML payloads can drastically reduce their size.

To enable GZIP compression on your server:

- **In Express.js**:
  ```javascript
  const compression = require('compression');
  app.use(compression());
  ```

If you **don't control the API** and can't implement compression, using a proxy server can help.

---

## Solution 2: Using a Proxy Server (HAProxy & NGINX)

When you don't control the API or if the response is too large for mobile users, a proxy server can help reduce the payload size and optimize performance. Here are two open-source solutions to compress or transform API responses before sending them to the mobile client.

---

## Option 1: Using HAProxy as a Proxy for Compression

**HAProxy** is a powerful, lightweight load balancer that can also be used as a reverse proxy for API requests. It's capable of compressing API responses, thus reducing payload size and speeding up mobile performance.

### Step-by-Step Setup with HAProxy:

1. **Install HAProxy** on your server (Ubuntu example):
   ```bash
   sudo apt-get install haproxy
   ```

2. **Configure HAProxy** to handle API requests and enable compression:
   Add this configuration to your HAProxy configuration file (`/etc/haproxy/haproxy.cfg`):
   
   ```haproxy
   frontend http_in
       bind *:80
       default_backend api_backend

   backend api_backend
       option http-server-close
       option http-keep-alive
       compression algo gzip
       compression type text/html text/plain application/json
       server api_server 127.0.0.1:8080
   ```

3. **Restart HAProxy**:
   ```bash
   sudo service haproxy restart
   ```

This configuration compresses the API responses using GZIP for the specified MIME types, reducing the payload size and improving the mobile experience. 

---

## Option 2: Using NGINX for API Compression and Transformation

**NGINX** is another popular open-source web server that can be used as a reverse proxy, capable of compressing and transforming API responses.

### Step-by-Step Setup with NGINX:

1. **Install NGINX** (Ubuntu example):
   ```bash
   sudo apt-get install nginx
   ```

2. **Configure NGINX** to proxy your API and enable compression:
   Edit your NGINX configuration file (usually found at `/etc/nginx/sites-available/default` or `/etc/nginx/nginx.conf`):

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location /api/ {
           proxy_pass http://api.yourdomain.com;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;

           # Enable GZIP compression
           gzip on;
           gzip_types text/plain application/xml application/json text/css;
           gzip_vary on;
       }
   }
   ```

3. **Restart NGINX**:
   ```bash
   sudo service nginx restart
   ```

This setup will proxy all `/api/` requests through NGINX, compressing JSON responses with GZIP. NGINX offers a flexible configuration and can handle both compression and more complex response transformations if needed.

---

## Bonus Option: Use a Node.js Proxy Server

If you're already using Node.js, you can quickly create a custom proxy server that compresses or filters responses before sending them to the client.

### Step-by-Step Setup with Node.js Proxy Server:

1. **Install Node.js and dependencies**:
   ```bash
   npm install express http-proxy-middleware compression
   ```

2. **Create a Proxy Server**:
   Create `proxy.js`:

   ```javascript
   const express = require('express');
   const { createProxyMiddleware } = require('http-proxy-middleware');
   const compression = require('compression');

   const app = express();

   // Enable GZIP compression
   app.use(compression());

   // Proxy requests to the API
   app.use('/api', createProxyMiddleware({
     target: 'http://api.yourdomain.com',
     changeOrigin: true,
     onProxyRes: function (proxyRes, req, res) {
       // Transform or modify the response here if needed
     }
   }));

   app.listen(3000, () => {
     console.log('Proxy server listening on port 3000');
   });
   ```

3. **Run the Proxy Server**:
   ```bash
   node proxy.js
   ```

Now, any API request sent through the `/api` endpoint will be proxied, compressed, and optimized for mobile consumption.

Let's take one step further and see how we can optimize API responses for mobile apps using a practical example.

### Practical Example: Reducing and Transforming Payload with a Node.js Proxy

Here's a practical example of how to reduce and transform an API payload using a **Node.js proxy server**. We'll simulate the original server response and transform it at the proxy level before sending it to the client.

1. **Simulate the API Response (Server)**:
   First, let's create a basic server to simulate the API, returning a large payload with unnecessary fields.

   ```javascript
   const express = require('express');
   const app = express();

   // Simulated large API response
   app.get('/api/data', (req, res) => {
       res.json({
           id: 1,
           username: 'JohnDoe',
           email: 'johndoe@example.com',
           profile_picture: 'https://example.com/johndoe.jpg',
           address: {
               street: '123 Main St',
               city: 'Anytown',
               country: 'USA'
           },
           phone_number: '123-456-7890',
           hobbies: ['reading', 'gaming', 'coding'],
           social_links: {
               twitter: '@johndoe',
               linkedin: 'linkedin.com/in/johndoe'
           }
       });
   });

   app.listen(8080, () => {
       console.log('Simulated API server running on port 8080');
   });
   ```

   In this example, the API is returning much more data than we might need for a mobile client.

2. **Transforming and Reducing Payload in the Proxy**:
   Now, we'll create a **Node.js proxy server** to intercept this API response and send only the fields we need (let's say just the `username` and `profile_picture`).

   ```javascript
   const express = require('express');
   const { createProxyMiddleware } = require('http-proxy-middleware');
   const compression = require('compression');

   const app = express();

   // Enable GZIP compression
   app.use(compression());

   // Proxy and transform the API response
   app.use('/api', createProxyMiddleware({
       target: 'http://my-server:8080',
       changeOrigin: true,
       selfHandleResponse: true, // Allows us to modify the response
       onProxyRes: function (proxyRes, req, res) {
           let body = '';
           proxyRes.on('data', (chunk) => {
               body += chunk;
           });

           proxyRes.on('end', () => {
               // Parse the original API response
               const originalData = JSON.parse(body);

               // Transform and reduce the payload
               const transformedData = {
                   username: originalData.username,
                   profile_picture: originalData.profile_picture
               };

               // Send the transformed data to the client
               res.json(transformedData);
           });
       }
   }));

   app.listen(3000, () => {
       console.log('Proxy server running on port 3000');
   });
   ```

   Here's what's happening in this proxy server:
   - We intercept the response using `onProxyRes`.
   - We **reduce** the payload to include only the `username` and `profile_picture` fields.
   - Finally, the transformed data is sent to the client in a more compact form.

3. **Testing the Proxy**:
   Now, let's **test this setup** by running both the API server and the proxy server.

   ```bash
   node api_server.js
   node proxy.js
   # Local DNS resolution for clarity
   echo "127.0.0.1 my-server" | sudo tee -a /etc/hosts
   echo "127.0.0.1 api.yourdomain.com" | sudo tee -a /etc/hosts

   # Test the server mock
   curl http://my-server:8080/api/data
   # Test the proxy server
   curl http://api.yourdomain.com:3000/api/data
   ```
  
    When you visit `http://api.yourdomain.com:3000/api/data`, the client will receive a reduced payload like this:
  
    ```json
    {
        "username": "JohnDoe",
        "profile_picture": "https://example.com/johndoe.jpg"
    }
   ```

By using this method, we've effectively reduced a large response into just the necessary fields for mobile devices, cutting down on data usage and improving app performance.

---

## Conclusion: Optimize Your API Responses for a Better Mobile Experience

Large API payloads can create poor user experiences on mobile devices. By optimizing API requests and using a proxy server to compress or transform responses, you can significantly reduce data usage and improve performance.

Whether you choose to filter responses directly from the client side or use a proxy server like HAProxy, NGINX, or Node.js, you'll ensure that your users can interact with your app smoothly, no matter their device or connection speed.

By implementing these solutions, you'll not only reduce bandwidth consumption but also create a faster, more responsive mobile experience that keeps users engaged.