import { getNotionClient } from "./notion.client.js";

export class NotionGateway {

  async findByName(name?: string) {

  const notion = getNotionClient();

  const response = await notion.search({
    query: "04_Tareas",
  });

  console.log(response.results);

  return response.results;
}

  async queryDataSource(dataSourceId: string) {

    const notion = getNotionClient();

    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
    });

    return response.results;
  }

}