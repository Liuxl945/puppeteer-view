import { APIHOST } from "@/config"

export default async ({ $axios, route, store, req, redirect, app }) => {

    $axios.setHeader("Content-Type", "application/json;charset=utf-8")

    $axios.onRequest(config => {
        config.baseURL = APIHOST
        config.timeout = 20000

        let token  = store.state.global.token

        if(config.url === "/user/token") {
            token = app.$cookies.get('token')
        }

        if (token) {
            config.headers["authorization"] = `${token}` // 让每个请求携带自定义token 请根据实际情况自行修改
        }

        return config
    })

    $axios.onResponse(res => {
        if(res.data.code === 50014) {
            redirect("/404")
        }
    })
}
