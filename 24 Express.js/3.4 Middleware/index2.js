import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"))

app.use((req, res, next) => {
  console.log("This is custom middleware")
  next()
});


app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submit", (req, res) => {
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
