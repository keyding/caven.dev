import { defineConfig, presetUno } from "unocss"
import presetIcons from "unocss/preset-icons"

export default defineConfig({
  presets: [presetUno(), presetIcons({})],
  theme: {
    fontFamily: {
      display:
        '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',
      vr: "varela_round",
    },
    colors: {
      sun: "#FEC74A",
      sea: "#62A3FF",
      forest: "#32D583",
    },
    boxShadow: {
      4: "4px 4px #0f172a",
      2: "2px 2px #0f172a",
    },
  },
})
