import { NotionGateway } from "../adapter/notion/notion.gateway.js";
import { WorkspaceRegistry } from "../workspace/registry.js";

export class TasksService {

  constructor(
    private gateway: NotionGateway,
    private registry: WorkspaceRegistry
  ) {}

  async execute() {

    const table = this.registry.getTable("TASKS");

    if (!table) {
      throw new Error("La tabla TASKS no está registrada.");
    }

    const tasks = await this.gateway.queryDataSource(table.id);

    return tasks;

  }

}