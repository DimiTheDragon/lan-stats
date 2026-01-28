for (const game of gameList) {
  const platformButton = document.createElement("button")
  const span = document.createElement("span")

  platformButton.id = `${game}Butt`
  platformButton.className = "marginButton"
  platformButton.addEventListener("click", () => {
    localStorage.setItem("platform", game)
    window.location.href = "../stats_display.html"
  })

  span.className = "button_top"
  span.textContent = game

  platformButton.appendChild(span)
  document.body.appendChild(platformButton)
}

