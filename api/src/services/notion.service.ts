import { Client } from "@notionhq/client";

function getNotionClient() {
  return new Client({
    auth: process.env.NOTION_TOKEN?.trim(),
  });
}

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