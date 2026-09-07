import { NotionGateway } from "../adapter/notion/notion.gateway.js";
import { EntityService } from "../core/entity.service.js";
import { workspaceConfig } from "../config/workspace.config.js";

import { Team } from "../domain/team/team.js";
import { mapTeam } from "../domain/team/team.mapper.js";

export class TeamsService extends EntityService<Team> {

  constructor(gateway: NotionGateway) {

    super(
      gateway,
      workspaceConfig.TEAMS.dataSourceId,
      mapTeam
    );

  }

}