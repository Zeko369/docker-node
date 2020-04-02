import express from "express";
import cors from "cors";
import morgan from "morgan";

const PORT = 3000;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ hello: "world" });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
