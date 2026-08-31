import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notionRoutes from "./routes/notion.routes.js";


dotenv.config();
const token = process.env.NOTION_TOKEN ?? "";

console.log("Token cargado:", !!token);
console.log("Prefijo:", token.substring(0, 8));
console.log("Longitud:", token.length);

const app = express();

app.use(cors());
app.use(express.json());
app.use(notionRoutes);

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