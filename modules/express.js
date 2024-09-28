const express = require('express');

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>hello world</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
    },
  ];

  res.json(users);
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`));