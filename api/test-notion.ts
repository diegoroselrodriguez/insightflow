import dotenv from "dotenv";

import { NotionGateway } from "./src/adapter/notion/notion.gateway.js";
import { ProjectsService } from "./src/services/projects.service.js";
import { CatalogLoader } from "./src/loaders/catalog.loader.js";
import { projectCache } from "./src/cache/caches.js";

dotenv.config();

async function main() {

  const gateway = new NotionGateway();

  const loader = new CatalogLoader(
    new ProjectsService(gateway),
    projectCache
  );

  await loader.load();

  console.log(projectCache.getAll());

}

main();