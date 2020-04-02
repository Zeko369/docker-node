import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import morgan from "morgan";

const PORT = 3000;

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  prisma.user
    .findMany({ include: { posts: true } })
    .then(users => {
      res.json(users);
    })
    .catch(err => res.status(500).json({ err }));
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
