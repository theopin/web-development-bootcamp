//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3001;
var isAuthorized = false;

//body parser is incorporated in express, installation optional
app.use(express.urlencoded({extended: true}))
app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body)
  if (isAuthorized)
    res.sendFile(__dirname + "/public/secret.html");

  else
    res.sendFile(__dirname + "/public/index.html");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


function logger(req, res, next) {
  console.log("This is custom middleware")
  console.log(req.method, req.url)

  if(req.body["password"] === "ILoveProgramming") {
    isAuthorized = true
  } else
    isAuthorized = false
    
  next() // missing this will cause infinity req
};