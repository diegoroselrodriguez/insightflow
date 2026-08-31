import { Router } from "express";
import { DiscoverWorkspaceService } from "../services/discover-workspace.service.js";
import { NotionGateway } from "../adapter/notion/notion.gateway.js";
import { workspaceRegistry } from "../workspace/workspace.instance.js";

const router = Router();

const gateway = new NotionGateway();
const registry = workspaceRegistry;

const discoverWorkspaceService = new DiscoverWorkspaceService(
  gateway,
  registry
);

router.post("/workspace/discover", async (_req, res) => {
  try {
    const schema = await discoverWorkspaceService.execute();

    res.json(schema);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export default router;