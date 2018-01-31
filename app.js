const express = require("express");
const moment = require("moment");
const app = express();
const PORT = process.argv[2] || 3000;

app.get("/:date", (req, res) => {
  try {
    const date = new Date(req.params.date);
    const naturalDate = moment(date).format("MMMM DD, YYYY");

    const response = {
      unix: date.getTime() / 1000 || null,
      natural: !(!naturalDate || naturalDate == "Invalid date")
        ? naturalDate
        : null
    };

    res.json(response);
  } catch (err) {
    res.end(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
