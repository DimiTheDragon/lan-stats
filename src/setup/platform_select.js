const steamButt = document.getElementById("steamButt");
const leagueButt = document.getElementById("leagueButt");

steamButt.addEventListener("click", () => {
    setItem("platform", "steam");
});

leagueButt.addEventListener("click", () => {
    setItem("platform", "league");
});