const mainContainer = document.getElementById("mainContainer");
const playerCount = localStorage.getItem("playerCount");
const platform = localStorage.getItem("platform");

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
    
    currentRowElement.appendChild(statsContainer);

    if (rowZeroed) {
        appendRow++;
    }

}

