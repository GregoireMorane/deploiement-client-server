const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  console.log("Hello world !");
});

app.listen(8009, () => {
  console.log(`Listening on port 8009.`);
});
