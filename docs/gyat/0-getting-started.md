---
title: Getting Started with GYAT
description: GYAT is a CLI tool that simplifies API consumption. Designed to replace curl, it reads Swagger specs and simplifies interactions with commands kubectl-like.
slug: /gyat
---

To get started with `GYAT`, you'll need two simple things:

1. **An OpenAPI specification file**: This describes the API you’re working with. For beginners, you can use the [Petstore example](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) API from the [Pet Store repository](https://github.com/swagger-api/swagger-petstore).
2. **GYAT Configuration**: `GYAT` uses the same configuration format as `kubectl` (i.e., the `kubeconfig` file). This keeps the learning curve minimal and makes configuration easier.

### Example GYAT Commands

:::warning

`gyat` is at an early stage of development. There may be breaking changes in the future to the command usage, flags, and configuration file formats. If something doesn't work as expected, please let us know by [opening an issue](https://go.rebelion.la/apicove-feedback), or contribute to its development with your feedback. 🤓

:::

Here are some useful `GYAT` commands to get you started:

```bash {2,5,8,11,14,17,20}
# Display help and list available APIs
gyat info

# List available operations for a specific API
gyat petstore info -v

# Retrieve a resource (e.g., pet) by ID
gyat petstore get pet 10

# Retrieve a resource (e.g., pet) by ID and output it in JSON format
gyat petstore get pet 10 --o=json

# Retrieve a resource (e.g., pet) with verbose output
gyat petstore get pet 10 --o=json --v

# Pipe output to jq for further processing
gyat petstore get pet 10 --o=json | jq .

# Retrieve a resource (e.g., pet) by operation ID with query parameters and output in YAML format
gyat petstore get pet --operationId=findPetsByStatus --status=available --o=yaml
```

For more information, check out the [GYAT documentation](/docs/gyat/).

* **Download**: You can download the latest version of `GYAT` from the [GitHub releases page](https://go.rebelion.la/apicove-downloads).