import { Task } from "./task.js";
import { workspaceConfig } from "../../config/workspace.config.js";

export function mapTask(page: any): Task {

  const fields = workspaceConfig.TASKS.fields;

  return {
    id: page.id,

    title:
      page.properties[fields.title].title[0]?.plain_text ?? "",

    projectId:
      page.properties[fields.project].relation[0]?.id ?? null,

    creatorId:
      page.properties[fields.creator].relation[0]?.id ?? null,

    teamId:
      page.properties[fields.team].relation[0]?.id ?? null,
  };
}