import { DataSourceDefinition } from "./schema.types.js";

export function buildSchema(dataSources: any[]): DataSourceDefinition[] {

  return dataSources
    .filter((source: any) => source.title?.length > 0)
    .map((source: any) => ({
      id: source.id,

      name: source.title[0].plain_text,

      properties: Object.values(source.properties).map((property: any) => ({
        name: property.name,
        type: property.type,
      })),
    }));

}