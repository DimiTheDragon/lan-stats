const mainContainer = document.getElementById("mainContainer");
const playerCount = getItem("playerCount");

let rows = 0;
let lastRow = 0;
let appendRow = 0;
let switchToCounter = false;

for (let i = 1; i <= playerCount; i++) {

    let diff = i - lastRow;
    if (i == 1 || diff == rows * 2) {
        rows++;
        lastRow = i;
        const row = document.createElement("div");
        row.className = "row";
        row.id = `row${rows}`;
        mainContainer.appendChild(row);
        appendRow = rows;
        switchToCounter = false;
    }

    let zeroDiff = i - lastRow;
    if (i == 2 || zeroDiff == rows) {
        appendRow = 1;
        switchToCounter = true;
    }

    const currentRowElement = document.getElementById(`row${appendRow}`);
    const statsContainer = document.createElement("div");
    statsContainer.className = "statsContainer";
    statsContainer.id = `statCont${i}`;
    currentRowElement.appendChild(statsContainer);

    if (switchToCounter) {
        appendRow++;
    }

}
