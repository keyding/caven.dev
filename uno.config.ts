import { defineConfig, presetUno } from "unocss"
import presetIcons from "unocss/preset-icons"

export default defineConfig({
  presets: [presetUno(), presetIcons({})],
  theme: {
    fontFamily: {
      display: 'Roboto, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      // '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',
      vr: "varela_round",
    },
    colors: {
      sun: "#FEC74A",
      sea: "#62A3FF",
      forest: "#32D583",
      brand: '#FFD268',
      cvTextPrimary: "#0E121B"
    },
    boxShadow: {
      4: "4px 4px #0f172a",
      2: "2px 2px #0f172a",
    },
  },
})
