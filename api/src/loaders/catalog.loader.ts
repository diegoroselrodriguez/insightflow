import { EntityCache } from "../cache/entity-cache.js";
import { Project } from "../domain/project/project.js";
import { ProjectsService } from "../services/projects.service.js";

export class CatalogLoader {

  constructor(
    private projectsService: ProjectsService,
    private projectCache: EntityCache<Project>,
  ) {}

  async load() {

    const projects = await this.projectsService.execute();

    this.projectCache.setAll(projects);

  }

}