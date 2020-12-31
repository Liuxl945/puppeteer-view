import { meta } from "./config"
import { resolve } from "path"

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "泽福工程管理公司",
        meta: [
            { charset: "utf-8" },
            { "http-equiv": "cleartype", content: "on" },
            { "http-equiv": "X-UA-Compatible", content: "IE=Edge" },
            { "http-equiv": "x-dns-prefetch-control", content: "on" },
            { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no" },
            { name: "author", content: meta.author },
            { hid: "keywords", name: "keywords", content: meta.keywords },
            { hid: "description", name: "description", content: meta.content }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "element-ui/lib/theme-chalk/index.css",
        "@/static/style/reset.scss",
        "@/static/style/paginate.scss",
        "swiper/dist/css/swiper.css"
        // "bootstrap-grid.css"
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: "@/static/icons/icons.js" },
        { src: "@/plugins/request.js" },
        { src: "@/plugins/element-ui.js" },
        // { src: "@/plugins/statistics.js", ssr: false, mode: "client" },
    ],

    router: {
        scrollBehavior(to,from,savePosition) {
            return { x: 0, y: 0 }
        }
    },

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "cookie-universal-nuxt"
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        maxChunkSize: 360000, // 单个包最大尺寸
        extractCSS: true, // 单独提取 css
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            const svgRule = config.module.rules.find(rule => rule.test.test(".svg"))
            svgRule.exclude = [resolve(__dirname, "./static/icons")]

            config.module.rules.push({
                test: /\.svg$/,
                include: [resolve(__dirname, "./static/icons")],
                use: [
                {
                    loader: "svg-sprite-loader",
                    options: {
                        symbolId: "icon-[name]"
                    }
                }]
            })
            config.resolve.alias.dom7$ = "dom7/dist/dom7.js"
            config.resolve.alias.swiper$ = "swiper/dist/js/swiper.js"
        }
    }
}
