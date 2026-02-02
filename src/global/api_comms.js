export async function getGameList() {
  const response = await fetch("/game-list");
  const list = await response.json();
  return list;
}

export function createStatFile(name) {
  fetch(`/${name}.json`, { method: "POST" });
  console.info("File created");
}

