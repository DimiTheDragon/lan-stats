import { setItem } from "../global/db_manager.js"
import { GAME_KEY } from "../global/standard_strings.js"
import { getGameList, createStatFile } from "../global/api_comms.js"

const gameList = await getGameList();
const buttons = [];

for (const [i, game] of gameList.entries()) {
  
  const gameButton = document.createElement("button");
  const gameSpan = document.createElement("span");

  gameButton.id = `${game}Butt`;
  gameButton.addEventListener("click", () => {
    setItem(GAME_KEY, game);
    window.location.href = "../stats_display/stats_display.html";
  });
  if (i != 0) {
    gameButton.className = "marginButton";
  }

  gameSpan.className = "button_top";
  gameSpan.textContent = game;

  gameButton.appendChild(gameSpan);
  buttons.push(gameButton);
}

const plusButton = document.createElement("button");
const plusSpan = document.createElement("span");

plusButton.id = "plusButt";
plusButton.className = "marginButton";
plusButton.addEventListener("click", () => {
  const newGame = prompt("Name of game: ");
  createStatFile(newGame);
});

plusSpan.className = "button_top";
plusSpan.textContent = "+";

plusButton.appendChild(plusSpan);
buttons.push(plusButton);

document.body.append(...buttons);

