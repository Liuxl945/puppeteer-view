export const state = () => ({
    isMobile: false,  // 是否为移动端
    page: 1, //当前页数
    page_size: 10, //每页显示多少条数据
    type_id: undefined, //根据type_id查询不同的文章
    token: undefined, //接口token认证
    userAgent: '', // 浏览器型号
    onMobileSidebar: false, // 是否显示移动端的滑动组件
    historyRoute: [],  // 历史路由
    navList: [
        {
            name: "泽福首页",
            path: "/"
        },
        {
            name: "法律法规",
            path: "/legal"
        },
        {
            name: "公告资讯",
            path: "/infomation"
        },
        {
            name: "关于泽福",
            path: "/about"
        },
        {
            name: "下载中心",
            path: "/download"
        }
    ], // 顶部导航栏
})

export const getters = {

}

const UPDATE_USER_AGENT = "UPDATE_USER_AGENT"
const UPDATE_MOBILE_LAYOUT_STATE = "UPDATE_MOBILE_LAYOUT_STATE"
const UPDATE_MOBILE_SIDEBAR_ON_STATE = "UPDATE_MOBILE_SIDEBAR_ON_STATE"
const SET_PAGE = 'SET_PAGE'
const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
const SET_TOKEN = 'SET_TOKEN'
const SET_HISTORY_ROUTE = 'SET_HISTORY_ROUTE'
const SET_NAV_LIST = 'SET_NAV_LIST'
const SET_TYPE_ID = 'SET_TYPE_ID'

export const mutations = {
    // 设置UA
    [UPDATE_USER_AGENT](state, action) {
        state.userAgent = action
    },
    // 设置是否移动端状态
    [UPDATE_MOBILE_LAYOUT_STATE](state, action) {
        state.isMobile = action
    },
    // 切换移动端侧边栏
    [UPDATE_MOBILE_SIDEBAR_ON_STATE](state, action) {
        state.onMobileSidebar = action
    },
    // 设置当前页数
    [SET_PAGE](state, number) {
        state.page = number
    },
    [SET_PAGE_SIZE](state, number) {
        state.page_size = number
    },
    // 设置token
    [SET_TOKEN](state, token) {
        state.token = token
    },
    // 设置历史路由
    [SET_HISTORY_ROUTE](state, route) {
        state.historyRoute = route
    },
    // 顶部导航栏
    [SET_NAV_LIST](state, route) {
        state.navList = route
    },
    // 设置type_id
    [SET_TYPE_ID](state, id) {
        state.type_id = id
    }
}

export const actions = {

}
