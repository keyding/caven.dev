import { Themes } from "./types"

const Cache: Record<string, HTMLElement | null> = {}

export function getLocalTheme() {
  return <Themes>(localStorage.getItem("theme") || Themes.Sun)
}
export function saveThemeToLocal(theme: Themes = Themes.Sun) {
  localStorage.setItem("theme", theme)
}
export function setBackgroundTheme(theme: Themes, prevTheme?: Themes) {
  const classList = getElementById("main")?.classList

  if (prevTheme) {
    classList?.replace(prevTheme, theme)
    return
  }

  classList?.add(theme)
}
export function setAboutMeIconTheme(theme: Themes) {
  ;[Themes.Sea, Themes.Sun, Themes.Forest].forEach((themeName) => {
    getElementById(themeName)?.classList[themeName === theme ? "remove" : "add"]("hidden")
  })
}
export function bindSwitchThemeEvent() {
  getElementById("theme-icons")?.addEventListener("click", (event) => {
    if (event && event.target instanceof HTMLElement) {
      const theme = <Themes>event.target.dataset.theme

      if (!theme) return

      setBackgroundTheme(theme, getLocalTheme())
      setAboutMeIconTheme(theme)
      saveThemeToLocal(theme)
      setFocusLine(theme)
    }
  })
}
export function setFocusLine(theme: Themes) {
  const ThemeMapFor = {
    [Themes.Sea]: "translateX(0.25rem)",
    [Themes.Sun]: "translateX(3.25rem)",
    [Themes.Forest]: "translateX(6.25rem)",
  }
  const focusLine = getElementById("focus-line")

  if (!focusLine) return

  focusLine.style.transform = ThemeMapFor[theme]
}
function getElementById(id: string) {
  return Cache[id] || (Cache[id] = document.getElementById(id))
}

// init
;(function () {
  const theme = getLocalTheme()
  saveThemeToLocal(theme)
  setBackgroundTheme(theme)
  setAboutMeIconTheme(theme)
  setFocusLine(theme)
  bindSwitchThemeEvent()
})()
