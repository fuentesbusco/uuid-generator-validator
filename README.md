# UUID Generator & Validator API (NestJS)

An API built with NestJS to generate UUID v4s and validate if a given string has the UUID/GUID format. Ideal for a portfolio project.

## Description

This API provides two main functionalities:

- Generate random UUID v4s.
- Validate the format of a text string as a UUID/GUID.

## Estimated Complexity Level

Very Simple.

## Technologies

- NestJS
- TypeScript
- `uuid` library
- `class-validator` and `class-transformer`

## Endpoints

### 1. Generate UUID

- **URL:** `/uuid/generate`
- **Method:** `GET`
- **Description:** Generates and returns a new random UUID v4.
- **Successful Response (200 OK):**
  ```json
  {
    "uuid": "..." // A string with the generated UUID v4
  }
  ```
