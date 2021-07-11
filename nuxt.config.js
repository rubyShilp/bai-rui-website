const resolve = require("path").resolve;
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "深圳市集佰睿科技有限公司-USB/Type-C技术方案商 EtherCAT技术方案商 集成电路供应商",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "UTF-8" },
      {
        hid: "viewport",
        name: "viewport",
        content:
          "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
      },
      {
        hid: "Description",
        name: "Description",
        content:
          "深圳市集佰睿科技有限公司-USB/Type-C技术方案商 EtherCAT技术方案商 集成电路供应商"
      },
      {
        hid: "Keywords",
        name: "Keywords",
        content: "SB/Type-C技术方案商 EtherCAT技术方案商 集成电路供应商"
      },
      {
        hid: "format-detection",
        name: "format-detection",
        content: "telephone=yes"
      },
      { "http-equiv": "pragma", content: "no-cache" },
      { "http-equiv": "cache-control", content: "no-cache" },
      { "http-equiv": "expires", content: "0" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css", "./styles/main.less"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    vendor: ["axios", "babel-polyfill"]
  },
  router: {
    scrollBehavior: (to, from, savedPosition) => {
      return { x: 0, y: 0 };
    },
    extendRoutes(routers) {
      routers.push(
        { path: "/", redirect: "/main/home" },
        {
          name: "main",
          path: "/main",
          component: resolve(__dirname, "./pages/index.vue"),
          children: [
            {
              name: "home",
              path: "/main/home",
              component: resolve(__dirname, "./pages/main/main.vue")
            }
          ]
        }
      );
    }
  }
};
