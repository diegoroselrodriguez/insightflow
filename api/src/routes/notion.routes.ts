import { Router } from "express";
import { checkConnection } from "../services/notion.service.js";
import { NotionGateway } from "../adapter/notion/notion.gateway.js";
import { buildSchema } from "../schema/schema.service.js";

const router = Router();
const notionRepository = new NotionGateway();

router.get("/notion/status", async (_req, res) => {
  try {
    const result = await checkConnection();

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

router.get("/notion/databases", async (_req, res) => {
  try {
    const databases = await notionRepository.findByName("");

    const schema = buildSchema(databases);

    res.json(schema);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export default router;