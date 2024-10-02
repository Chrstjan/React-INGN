const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to INGN Backend");
});

app.post("/signin", (req, res) => {
  console.log(req.body);

  if (req.body.username === "admin" && req.body.password === "1234") {
    res.send({ token: process.env.AUTH_TOKEN });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
