export {}

type ThemeType = "theme-sea" | "theme-sun" | "theme-forest"

const ThemeMapFor = {
  "theme-sea": "translateX(0.25rem)",
  "theme-sun": "translateX(3.25rem)",
  "theme-forest": "translateX(6.25rem)",
}
const themeIcons = document.getElementById("theme-icons")
const focusLine = document.getElementById("focus-line") as HTMLElement
const main = document.getElementById("main") as HTMLElement

focusLine.style.transform = ThemeMapFor[localStorage.getItem("theme") as ThemeType]

themeIcons?.addEventListener("click", (event) => {
  if (event && event.target instanceof HTMLElement) {
    const currentTheme = localStorage.getItem("theme") as ThemeType
    const theme = event.target.dataset.theme as ThemeType

    if (!theme) return

    focusLine.style.transform = ThemeMapFor[theme]
    main.classList.replace(currentTheme, theme)
    localStorage.setItem("theme", theme)
  }
})
