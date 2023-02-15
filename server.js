import express from "express";
import morgan from "morgan";
// import data from "./data.json" assert { type: "json" };
import { readFileSync } from "fs";
const data = JSON.parse(readFileSync("./data.json"));

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hello there! you can use this api to retrieve some kittens");
});

app.get("/api/kittens", (req, res) => {
  res.send(data);
  // setTimeout(() => {
  // }, 3000);
  // res.sendStatus(500);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
