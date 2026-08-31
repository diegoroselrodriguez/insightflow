import { Router } from "express";
import { checkConnection } from "../services/notion.service.js";

const router = Router();

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

export default router;