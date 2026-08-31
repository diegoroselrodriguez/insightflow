export interface PropertyDefinition {
  name: string;
  type: string;
}

export interface DataSourceDefinition {
  id: string;
  name: string;
  properties: PropertyDefinition[];
}