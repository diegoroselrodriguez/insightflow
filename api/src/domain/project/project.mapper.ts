import { Project } from "./project.js";

export function mapProject(page: any): Project {

  return {
    id: page.id,

    name:
      page.properties.Proyecto.title[0]?.plain_text ?? "",
  };

}