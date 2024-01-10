import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto_sidebar.mjs"; // 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo/",
  head: [["link", { rel: "icon", href: "/docs-demo/logo.svg" }]],
  title: "我的厉害的项目",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "目录",
    outline: [2, 6],
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "家",
        items: [
          { text: "首页", link: "/" },
          { text: "markdown示例", link: "/markdown-examples" },
        ],
      },
      { text: "markdown示例", link: "/markdown-examples" },
      { text: "自动生成侧边栏", link: "/front-end/react/" },
      { text: "自动生成侧边栏2", link: "/backend/rabbitmq/" },
      { text: "两边栏演示", link: "/两边栏演示" },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: 'Runtime API 演示', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: 'Runtime API 演示', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar: {
    //   "/front-end/react": set_sidebar("/front-end/react"),
    //   "/backend/rabbitmq": set_sidebar("backend/rabbitmq"),
    // },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: "github", link: "https://github.com/AZCodingAccount" },
      {
        icon: {
          svg: '<svg t="1704626282666" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4227" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4228"></path></svg>',
        },
        link: "https://gitee.com/Albert_han",
      },
    ],
    footer: {
      copyright: "Copyright © 2023-present My Name ",
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
});
