import { Router } from "express";
import { NotionGateway } from "../adapter/notion/notion.gateway.js";
import { workspaceRegistry } from "../workspace/workspace.instance.js";
import { TasksService } from "../services/tasks.service.js";

const router = Router();

const gateway = new NotionGateway();
const registry = workspaceRegistry;

const tasksService = new TasksService(gateway, registry);

router.get("/tasks", async (_req, res) => {
  try {
    const tasks = await tasksService.execute();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export default router;