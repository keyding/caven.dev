import { defineConfig, presetUno } from "unocss"

export default defineConfig({
  presets: [presetUno()],
  theme: {
    fontFamily: {
      display:
        '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',
      bio: '"Rounded Mplus 1c"',
    },
  },
})
