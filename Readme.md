# Speakable test

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CANVAS_LMS_API_BASE_URL=https://canvas.instructure.com/api/v1`

`CANVAS_LMS_CLIENT_ID`

`CANVAS_LMS_CLIENT_SECRET`

Also you need to create a service account key for Firebase Admin and add the file to the root of the project with the name `serviceAccountKey.json`

Documentation for Firebase Admin: https://firebase.google.com/docs/admin/setup

## Run Locally

Clone the project

```bash
  git clone https://github.com/CamiloEMP/speakable-technical-test.git
```

Go to the project directory

```bash
  cd speakable-technical-test
```

Install dependencies (I recommend using pnpm, but you can use npm or yarn)

```bash
  pnpm install
```

Start the server with Canvas LMS Api

```bash
  pnpm dev:canvas
```

Start the server with Local Files

```bash
  pnpm dev:local
```

## Tech Stack

Express, Typescript, Passport, Firebase Admin

## Why I am have two functions that initialize the app?

I have two functions that initialize the app because for this project how I don't have access to the tokens from Canvas LMS, I thought that it would be a good idea to have a local server that simulates the Canvas LMS API, so I can test the app without having to make requests to the Canvas LMS API, asumming that the mock server will return the same data as the Canvas LMS API.
