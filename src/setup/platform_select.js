const steamButt = document.getElementById("steamButt");
const leagueButt = document.getElementById("leagueButt");

steamButt.addEventListener("click", () => {
    setItem("platform", "minecraft");
});

leagueButt.addEventListener("click", () => {
    setItem("platform", "factorio");
});