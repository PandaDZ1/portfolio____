# Portfolio (React + Express)

```
server/   Node.js + Express API  (port 5000)
client/   React + Vite frontend  (port 3000)
```

## Run in development

Open two terminals:

```bash
# Terminal 1 - backend
cd server
npm install
npm run dev
```

```bash
# Terminal 2 - frontend
cd client
npm install
npm run dev
```

Open http://localhost:3000

## Customize

Edit your name, bio, skills and projects in `server/data.js`.

## API

| Method | Route           | Description                   |
| ------ | --------------- | ----------------------------- |
| GET    | /api/profile    | Your profile info             |
| GET    | /api/projects   | List of projects              |
| POST   | /api/contact    | Send a message `{name, email, message}` |
| GET    | /api/messages   | See received messages         |

## Production

```bash
cd client && npm run build
cd ../server && npm start
```

The Express server then serves the built site at http://localhost:5000.
