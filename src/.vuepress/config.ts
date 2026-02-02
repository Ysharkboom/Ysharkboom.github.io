import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Sodadoit",
  description: "Ai 探索 官方网站 http：//sodadoit.com",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
