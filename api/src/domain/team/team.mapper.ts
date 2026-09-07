import { Team } from "./team.js";
import { workspaceConfig } from "../../config/workspace.config.js";

export function mapTeam(page: any): Team {

  const fields = workspaceConfig.TEAMS.fields;

  return {

    id: page.id,

    name:
      page.properties[fields.name].title[0]?.plain_text ?? "",

  };

}