export function extractPageId(url: string): string {

  const match = url.match(/([a-f0-9]{32})$/i);

  if (!match) {
    throw new Error("URL de Notion no válida.");
  }

  const id = match[1];

  return id.replace(
    /(.{8})(.{4})(.{4})(.{4})(.{12})/,
    "$1-$2-$3-$4-$5"
  );

}