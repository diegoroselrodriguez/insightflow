import { Employee } from "./employee.js";
import { workspaceConfig } from "../../config/workspace.config.js";

export function mapEmployee(page: any): Employee {

  const fields = workspaceConfig.EMPLOYEES.fields;

  return {
    id: page.id,

    name:
      page.properties[fields.name].title[0]?.plain_text ?? "",
  };

}