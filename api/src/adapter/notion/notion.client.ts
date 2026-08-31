import { Client } from "@notionhq/client";

export function getNotionClient() {
    return new Client({
        auth: process.env.NOTION_TOKEN?.trim(),
    });
}