const currentTheme = localStorage.getItem("theme") || "theme-sun"
localStorage.setItem("theme", currentTheme)
document.getElementById("main")?.classList.add(currentTheme)

export {}
