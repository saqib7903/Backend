const express = require("express");
const blog = require('./routes/blog')
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog' , blog)

app.get("/", (req, res) => {
  console.log("Hi there!!!!");
  res.send("Hello World21");
});

app.post("/", (req, res) => {
  console.log("Hi there!!!!");
  res.send("Hello World post");
});

app.get("/index", (req, res) => {
  console.log("Hi there index");
  res.sendFile("template/index.html", {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
