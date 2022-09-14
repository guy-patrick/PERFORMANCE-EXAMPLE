const express = require("express");
const app = express();

function delay(durarion) {
  const startTime = Date.now();
  while (Date.now() - startTime < durarion) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send(`Performance example - ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ding ding ding! - ${process.pid}`);
});

console.log("Worker process started");
app.listen(3000, () => {
  console.log("listening ...");
});
