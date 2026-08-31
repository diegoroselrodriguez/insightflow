import { NotionGateway } from "../adapter/notion/notion.gateway.js";
import { buildSchema } from "../schema/schema.service.js";
import { WorkspaceRegistry } from "../workspace/registry.js";
import { detectEntityType } from "../discovery/workspace-analyzer.js";

export class DiscoverWorkspaceService {

  constructor(
    private gateway: NotionGateway,
    private registry: WorkspaceRegistry
  ) {}

  async execute() {

    const dataSources = await this.gateway.findByName("");

    const schema = buildSchema(dataSources);

    const tables = schema.map(table => ({
        ...table,
        entityType: detectEntityType(table.properties),
        }));

        this.registry.setTables(
            tables.map(table => ({
                id: table.id,
                notionName: table.name,
                logicalName: table.entityType,
            }))
        );

        return {
        configured: false,
        tables,
        registry: this.registry.getTables(),
        };

  }

}