const express = require("express");
const app = express();

function delay(durarion) {
  const startTime = Date.now();
  while (Date.now() - startTime < durarion) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send("Performance example");
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("Ding ding ding!");
});

app.listen(3000, () => {
  console.log("listening ...");
});
