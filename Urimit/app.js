const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send('This is root')
});

app.get("/login", (req, res) => {
  res.send("This is login page");
});

app.listen(8000, ()=> {
  console.log("서버 가동");
});