import { NotionGateway } from "../adapter/notion/notion.gateway.js";
import { EntityService } from "../core/entity.service.js";
import { workspaceConfig } from "../config/workspace.config.js";

import { Employee } from "../domain/employee/employee.js";
import { mapEmployee } from "../domain/employee/employee.mapper.js";

export class EmployeesService extends EntityService<Employee> {

  constructor(gateway: NotionGateway) {

    super(
      gateway,
      workspaceConfig.EMPLOYEES.dataSourceId,
      mapEmployee
    );

  }

}