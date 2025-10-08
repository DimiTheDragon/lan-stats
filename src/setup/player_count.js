// THIS FILE SHOULD ONLY BE USED TO TAKE THE AMOUNT OF PLAYERS FROM THE HTML PAGE,
// SAVE IT IN THE LOCALSTORAGE AND LOAD THE ENVIRONMENT SELECT PAGE

const countInput = document.querySelector("input");
const nextButton = document.querySelector("button");

nextButton.addEventListener("click", () => {
    setItem("playerCount", countInput.value.toString());
    window.location.assign("platform_select.html");
});