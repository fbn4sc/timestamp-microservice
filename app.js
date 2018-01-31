const express = require("express");
const moment = require("moment");
const app = express();
const PORT = process.argv[2];

app.get("/:date", (req, res) => {
  try {
    const date = new Date(req.params.date);

    const response = {
      unix: date.getTime() / 1000 || null,
      natural: moment(date).format("MMMM DD, YYYY") || null
    };

    res.json(response);
  } catch (err) {
    res.end(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
