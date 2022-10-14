const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let Year = date.getFullYear();
  response.send(`${day}-${month}-${Year}`);
});
module.exports = app;
