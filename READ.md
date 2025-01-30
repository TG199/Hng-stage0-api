# HNG Stage 0 Backend API

This is a simple **public API** developed as part of the **HNG Internship** Stage 0 Backend task. The API provides basic information, including the email used for registration, the current datetime in ISO 8601 format (UTC), and the GitHub URL of the project's codebase.

## API Endpoint

- **URL:** `GET /`
- **Response Format:** JSON

### Sample Response:

```json
{
    "email":"ebiritg@gmail.com",
    "current_datetime":"2025-01-30T16:33:37.006Z",
    "github_url":"https://github.com/TG199/Hng-stage0-api"
}
```
## Features
- Provides the email address used to register on the HNG12 Slack workspace.
- Returns the current datetime as an ISO 8601 formatted timestamp (UTC).
- Includes the GitHub URL of the project’s repository.

## Requirements
- Node.js (v14 or higher)
- Express.js
- CORS for handling cross-origin requests

## Installation
1. ### Clone the Repository:
```bash
git clone https://github.com/TG199/Hng-stage0-api
```
2. ### Install Dependencies:
```bash
npm install
```
3. ### Start the Application:
```bash
npm start
```
The API will be running locally at http://localhost:5000.

## API Documentation
### Endpoint: GET /
- Response:
    - email: My registered email address (string).
    - current_datetime: The current UTC datetime in ISO 8601 format (string).
    - github_url: The GitHub URL of the project’s codebase (string).
### Example Usage:
You can use curl or Postman to test the endpoint.

curl Example:
```bash
curl http://localhost:5000/
```
### Expected Response:
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### Deployment
This API has been deployed and is publicly accessible via the following link:
- [Link](https://hng-stage0-api-plb9.onrender.com)

### Backlink
- [Hire Nodejs Developers](https://hng.tech/hire/nodejs-developers)

### License
This project is licensed under the MIT License

