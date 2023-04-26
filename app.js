import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("3nd!");
});

app.post("/", (req, res) => {
  res.send("Hello World! - posted!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
