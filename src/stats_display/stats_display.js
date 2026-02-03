import { getStatList } from "../global/api_comms.js";
import { getItem } from "../global/db_manager.js";
import { GAME_KEY } from "../global/standard_strings.js";

const mainContainer = document.getElementById("mainContainer");
const rawStatList = await getStatList(getItem(GAME_KEY));
const statList = Object.entries(rawStatList);
const userCount = statList.length;

let rows = 0;
let lastRow = 0;
let appendRow = 0;
let rowZeroed = false;

for (let i = 1; i <= userCount; i++) {

    let diff = i - lastRow;
    if (i === 1 || diff === rows * 2) {
        rows++;
        lastRow = i;
        const row = document.createElement("div");
        row.className = "row";
        row.id = `row${rows}`;
        mainContainer.appendChild(row);
        appendRow = rows;
        rowZeroed = false;
    }

    let zeroDiff = i - lastRow;
    if (i === 2 || zeroDiff === rows) {
        appendRow = 1;
        rowZeroed = true;
    }

    const currentRowElement = document.getElementById(`row${appendRow}`);
    const statsContainer = document.createElement("div");
    statsContainer.className = "statsContainer";
    statsContainer.id = `statCont${i}`;
    
    // stats go here
    const currentUsername = statList[i - 1][0];
    const currentUserStats = statList[i - 1][1];

    const usernameElement = document.createElement("h3");
    usernameElement.textContent = currentUsername;
    statsContainer.appendChild(usernameElement);

    for (const stat in currentUserStats) {
        const statElement = document.createElement("p");
        statElement.textContent = `${stat}: ${currentUserStats[stat]}`;

        statsContainer.appendChild(statElement);
    }

    currentRowElement.appendChild(statsContainer);

    if (rowZeroed) {
        appendRow++;
    }

}
