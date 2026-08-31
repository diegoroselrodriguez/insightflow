import { getNotionClient } from "../adapter/notion/notion.client.js";

export async function checkConnection() {
  const notion = getNotionClient();

  const me = await notion.users.me({});

  return {
    success: true,
    id: me.id,
    type: me.type,
    workspace:
      "bot" in me && me.bot.workspace_name
        ? me.bot.workspace_name
        : null,
  };
}

export async function getDatabases() {
  const notion = getNotionClient();

  const response = await notion.search({
    filter: {
      property: "object",
      value: "data_source",
    },
  });

  return response.results.map((database: any) => ({
    id: database.id,
    title:
      database.title.length > 0
        ? database.title[0].plain_text
        : "(Sin nombre)",
  }));
}