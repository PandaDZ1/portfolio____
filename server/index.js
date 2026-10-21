const express = require("express");
const path = require("path");
const { profile, projects } = require("./data");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Messages from the contact form are kept in memory (lost on restart).
const messages = [];

app.get("/api/profile", (req, res) => {
  res.json(profile);
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email." });
  }

  const entry = { name, email, message, date: new Date().toISOString() };
  messages.push(entry);
  console.log("New message:", entry);

  res.status(201).json({ success: true, message: "Thanks! Your message was sent." });
});

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// In production, serve the built React app.
const clientDist = path.join(__dirname, "..", "client", "dist");
app.use(express.static(clientDist));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(clientDist, "index.html"), (err) => {
    if (err) res.status(404).send("Client not built. Run `npm run build` in /client.");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
