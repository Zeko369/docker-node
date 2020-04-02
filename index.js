const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const PORT = 3000;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
