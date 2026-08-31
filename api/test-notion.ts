import dotenv from "dotenv";
import { Client } from "@notionhq/client";

dotenv.config();

async function main() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN?.trim(),
  });

  try {
    const me = await notion.users.me();
    console.log("OK");
    console.log(me);
  } catch (err) {
    console.error(err);
  }
}

main();