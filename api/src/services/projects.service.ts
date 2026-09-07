import { NotionGateway } from "../adapter/notion/notion.gateway.js";
import { workspaceConfig } from "../config/workspace.config.js";
import { mapProject } from "../domain/project/project.mapper.js";
import { EntityService } from "../core/entity.service.js";
import { Project } from "../domain/project/project.js";

export class ProjectsService extends EntityService<Project> {

  constructor(gateway: NotionGateway) {

    super(
      gateway,
      workspaceConfig.PROJECTS.dataSourceId,
      mapProject
    );

  }

}