const express = require("express");
const app = express();
const PORT = process.argv[2];

app.get("/", (req, res) => {
  res.end("Hello.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
