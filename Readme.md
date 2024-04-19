# Speakable test

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CANVAS_LMS_API_BASE_URL=https://canvas.instructure.com/api/v1`

`CANVAS_LMS_CLIENT_ID`

`CANVAS_LMS_CLIENT_SECRET`

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
  pnpm dev
```

Start the server with Local Files

```bash
  pnpm dev:local
```

## Tech Stack

Express, Typescript, Passport, Firebase Admin
