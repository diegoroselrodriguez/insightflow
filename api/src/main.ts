import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notionRoutes from "./routes/notion.routes.js";
import workspacesRoutes from "./routes/workspace.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

dotenv.config();
const token = process.env.NOTION_TOKEN ?? "";

console.log("Token cargado:", !!token);
console.log("Prefijo:", token.substring(0, 8));
console.log("Longitud:", token.length);

const app = express();

app.use(cors());
app.use(express.json());
app.use(notionRoutes);
app.use(workspacesRoutes);
app.use(tasksRoutes);


app.get("/", (_req, res) => {
  res.json({
    application: "InsightFlow API",
    version: "0.1.0",
    status: "running",
    endpoints: [
      "/health",
      "/notion/status",
      "/notion/databases"
    ]
  });
});

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