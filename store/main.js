import { Restart } from "@/static/js/utils"

export const state = () => ({
    banner: [], //轮播图

    allNotice: [], //首页公告
    noticeList: [], //公告类型列表
    noticeTypes: [], //公告列表
    noticeActive: undefined, //选中的公告
    noticeCount: 0, //公告总数
    noticeDetails: {}, //公告详情

    legalList: [], //法律法规
    legalDetails: {}, //公告详情
    legalCount: 0, //公告详情

    downloadList: [], //下载中心
    downloadTypes: [], //下载分类
    downloadActive: undefined, //选中的下载
    downloadCount: 0, //下载总数
})

export const getters = {

}

const SET_BANNER = "SET_BANNER"
const SET_ALL_NOTICE = "SET_ALL_NOTICE"
const SET_NOTICE_LIST = "SET_NOTICE_LIST"
const SET_NOTICE_TYPES = "SET_NOTICE_TYPES"
const SET_NOTICE_ACTIVE = "SET_NOTICE_ACTIVE"
const SET_NOTICE_COUNT = "SET_NOTICE_COUNT"
const SET_LEGAL_COUNT = "SET_LEGAL_COUNT"
const SET_NOTICE_DETAILS = "SET_NOTICE_DETAILS"
const SET_LEGAL_LIST = "SET_LEGAL_LIST"
const SET_LEGAL_DETAILS = "SET_LEGAL_DETAILS"
const SET_FILE_LIST = "SET_FILE_LIST"
const SET_FILE_TYPES = "SET_FILE_TYPES"
const SET_FILE_ACTIVE = "SET_FILE_ACTIVE"
const SET_FILE_COUNT = "SET_FILE_COUNT"

export const mutations = {
    [SET_BANNER](state, res) {
        state.banner = res
    },
    [SET_ALL_NOTICE](state, res) {
        state.allNotice = res
    },
    [SET_NOTICE_LIST](state, res) {
        state.noticeList = res
    },
    [SET_NOTICE_TYPES](state, res) {
        state.noticeTypes = res
    },
    [SET_NOTICE_ACTIVE](state, res) {
        state.noticeActive = res
    },
    [SET_NOTICE_COUNT](state, res) {
        state.noticeCount = res
    },
    [SET_LEGAL_COUNT](state, res) {
        state.legalCount = res
    },
    [SET_NOTICE_DETAILS](state, res) {
        state.noticeDetails = res
    },
    [SET_LEGAL_DETAILS](state, res) {
        state.legalDetails = res
    },
    [SET_LEGAL_LIST](state, res) {
        state.legalList = res
    },
    [SET_FILE_LIST](state, res) {
        state.downloadList = res
    },
    [SET_FILE_TYPES](state, res) {
        state.downloadTypes = res
    },
    [SET_FILE_ACTIVE](state, res) {
        state.downloadActive = res
    },
    [SET_FILE_COUNT](state, res) {
        state.downloadCount = res
    },
}

export const actions = {
    // 查询轮播图列表
    async getBanner({ state, commit }, params = {}) {
        params.is_show = 1 //隐藏的轮播图不查询

        let res = await this.$axios({
            method: "get",
            url: "/carousel/get",
            params: params
        })
        if(res.data.code === 200) {
            let list = res.data.data.rows

            commit(SET_BANNER, list)
        }

        return res.data
    },

    // 查询首页公告详情
    async getAllNotice({ state, commit }, params = {}) {

        let res = await this.$axios({
            method: "get",
            url: "/notice/all",
            params: params
        })
        if(res.data.code === 200) {
            let list = res.data.data

            commit(SET_ALL_NOTICE, list)
        }

        return res.data
    },

    // 查询公告列表
    async getNoticeList({ state, commit }, params = {}) {
        params.is_show = 1 //隐藏的轮播图不查询

        let res = await this.$axios({
            method: "get",
            url: "/notice/get",
            params: params
        })
        if(res.data.code === 200) {
            let list = res.data.data.rows

            commit(SET_NOTICE_LIST, list)
            commit(SET_NOTICE_COUNT, res.data.data.count)
        }

        return res.data
    },

    // 查询公告类型
    async getNoticeTypes({ state, commit }, params = {}) {

        let res = await this.$axios({
            method: "get",
            url: "/ntype/get",
            params: params
        })
        if(res.data.code === 200) {
            let list = res.data.data.rows

            list.unshift({
                id: undefined,
                ly_name: "全部公告"
            })

            commit(SET_NOTICE_TYPES, list)
        }

        return res.data
    },

    // 查询公告详情
    async getNoticeDetails({ state, commit }, params = {}) {
        
        let res = await this.$axios({
            method: "get",
            url: "/notice/details",
            params: params
        })
        if(res.data.code === 200) {
            let list = res.data.data

            commit(SET_NOTICE_DETAILS, list)
        }

        return res.data
    },

    async clickNotice({ state, commit }, params = {}) {
        let res = await this.$axios({
            method: "post",
            url: "/notice/click",
            data: params
        })
        
        return res.data
    },

    async clickLegal({ state, commit }, params = {}) {
        let res = await this.$axios({
            method: "post",
            url: "/legal/click",
            data: params
        })
        
        return res.data
    },


    // 查询法律法规列表
    async getLegalList({ state, commit }, params = {}) {
        params.is_show = 1 //隐藏的轮播图不查询

        let res = await this.$axios({
            method: "get",
            url: "/legal/get",
            params: params
        })
        if(res.data.code === 200) {
            let list = res.data.data.rows

            commit(SET_LEGAL_LIST, list)
            commit(SET_LEGAL_COUNT, res.data.data.count)
        }

        return res.data
    },

    // 查询法律法规详情
    async getLegalDetails({ state, commit }, params = {}) {
        
        let res = await this.$axios({
            method: "get",
            url: "/legal/details",
            params: params
        })
        if(res.data.code === 200) {
            let list = res.data.data

            commit(SET_LEGAL_DETAILS, list)
        }

        return res.data
    },

    // 查询文件下载列表
    async getDownloadList({ state, commit }, params = {}) {
        params.is_show = 1 //隐藏的轮播图不查询

        let res = await this.$axios({
            method: "get",
            url: "/file/get",
            params: params
        })
        if(res.data.code === 200) {
            let list = res.data.data.rows

            commit(SET_FILE_LIST, list)
            commit(SET_FILE_COUNT, res.data.data.count)
        }

        return res.data
    },

    // 查询文件下载类型列表
    async getDownloadTypes({ state, commit }, params = {}) {

        let res = await this.$axios({
            method: "get",
            url: "/ftype/get",
            params: params
        })
        if(res.data.code === 200) {
            let list = res.data.data.rows

            list.unshift({
                id: undefined,
                ly_name: "全部文件"
            })

            commit(SET_FILE_TYPES, list)
        }

        return res.data
    }

}
