import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "InsightFlow API"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`InsightFlow API running on port ${PORT}`);
});