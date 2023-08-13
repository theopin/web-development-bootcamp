import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(logger);
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body)
  res.send("<h1>LOL<div>" + req.body["street"] + " "  + req.body["pet"] + "</div></h1>")
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


function logger(req, res, next) {
  console.log("This is custom middleware")
  console.log(req.method, req.url)
  next() // missing this will cause infinity req
};