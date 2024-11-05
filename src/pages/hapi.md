---
title: HAPI - Headless API
layout: page
---

# HAPI - Headless API

API-First Development and API-Driven Development are two popular approaches to building modern applications. These methodologies emphasize the importance of designing and developing APIs before building the frontend or backend of an application. By focusing on the API layer first, developers can create more flexible, scalable, and maintainable applications.

<center>
<img src="/img/API-First-architecture-using-EdgeDB-and-JSON-schemas.webp" alt="API-First architecture using EdgeDB and JSON schemas" width="600px"></img>
</center>

[Headless CMS](https://jamstack.org/headless-cms/) platforms have gained popularity in recent years as a way to manage content for API-driven applications. These platforms provide a backend for content management, allowing developers to focus on building the frontend of their applications. However, many developers find existing headless CMS solutions to be too rigid or limited in their customization options.

Of course, other tools like [Postman](https://www.mock-server.com), [Stoplight](https://stoplight.io/), [MockServer](https://www.mock-server.com), and others are available to help developers to test their APIs, but at "[La Rebelion](https://rebelion.la)" we think that there is still room for improvement in this area. We believe that there is a need for a more flexible and customizable tool that allows developers to easily build, customize, and scale API-first applications to achive a [MACH architecture](https://macharchitecture.com/) (Microservices, API-First, Cloud-Native, Headless) in an easy and automated way.

For instance, we think that Headless CMS could be a greate tool for developers to leverage the power of API-First Development and API-Driven Development, but we also think that the current solutions are not flexible enough for developers to fully realize the potential of these methodologies. Technical users and developers often feel constrained by traditional headless CMS solutions, which prioritize ease of use and pre-built functionality at the cost of flexibility. These users need more control over their API and data structure, as well as the ability to fully customize their development stack to suit unique use cases. A tool that bridges this gap would enable developers to retain control without being bogged down by unnecessary abstraction.

Picture this, after you have defined your API interactions, schema definitions, and data management, you could easily scaffold a fully functional API server without writing any code. This is where HAPI comes in. HAPI (Headless API) is a new tool that aims to provide developers with a more flexible and customizable alternative to traditional headless CMS platforms, HAPI empowers developers to easily build, customize, and scale API-first applications in an easy and automated way. By leveraging JSON schemas and Swagger/OpenAPI specifications, HAPI allows developers to define their API interactions, schema definitions, and data management with ease. HAPI also integrates with EdgeDB, a modern object-relational database, and frameworks like Elysia, a GraphQL server for EdgeDB, to provide a more customizable and powerful development experience.

With HAPI, developers can quickly scaffold a fully functional API server without writing any code... well almost any code, developers are still responsible of the business logic of their applications. Someday we will have a tool that writes the business logic for us (HAPI-AI agent?), but for now, we have to write it ourselves. 🤓

Desing the API, ~implement server endpoints~, ~model the data~, ~set up the database~, develop business logic, test, and deploy your API-first applications with HAPI. To get started with HAPI, check out the [HAPI getting started documentation](/docs/hapi/).

