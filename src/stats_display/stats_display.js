import { getStatList } from "../global/api_comms.js";
import { getItem } from "../global/db_manager.js";
import { GAME_KEY } from "../global/standard_strings.js";

const mainContainer = document.getElementById("mainContainer");
const statList = await getStatList(getItem(GAME_KEY));
const playerCount = statList.length;

let rows = 0;
let lastRow = 0;
let appendRow = 0;
let rowZeroed = false;

for (let i = 1; i <= playerCount; i++) {

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
    // here, add the stats in the containers
    for (const stat of Object.values(statList[i - 1])) {
        const p = document.createElement("p");
        p.textContent = stat;
        statsContainer.appendChild(p);
    }
    currentRowElement.appendChild(statsContainer);

    if (rowZeroed) {
        appendRow++;
    }

}
