import dotenv from "dotenv";

import { NotionGateway } from "./src/adapter/notion/notion.gateway.js";

import { TasksService } from "./src/services/tasks.service.js";
import { ProjectsService } from "./src/services/projects.service.js";
import { EmployeesService } from "./src/services/employees.service.js";
import { TeamsService } from "./src/services/teams.service.js";

dotenv.config();

async function main() {

  const gateway = new NotionGateway();

  console.log("=== TASKS ===");
  console.dir(await new TasksService(gateway).execute(), { depth: null });

  console.log("\n=== PROJECTS ===");
  console.dir(await new ProjectsService(gateway).execute(), { depth: null });

  console.log("\n=== EMPLOYEES ===");
  console.dir(await new EmployeesService(gateway).execute(), { depth: null });

  console.log("\n=== TEAMS ===");
  console.dir(await new TeamsService(gateway).execute(), { depth: null });

}

main();