for (const game of gameList) {
  const platformButton = document.createElement("button")
  const span = document.createElement("span")

  platformButton.id = `${game}Butt`
  platformButton.className = "marginButton"
  platformButton.addEventListener("click", () => {
    setItem("platform", game)
  })

  span.className = "button_top"
  span.textContent = game

  platformButton.appendChild(span)
  document.body.appendChild(platformButton)
}

