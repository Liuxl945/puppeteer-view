const isServer = process && process.server

const uaDevice = userAgent => ({
    isEdge: userAgent.includes('Edge'),
    isFF: userAgent.includes('Firefox'),
    isOpera: userAgent.includes('Opera'),
    isBB: userAgent.includes('BlackBerry'),
    isChrome: userAgent.includes('Chrome'),
    isMaxthon: userAgent.includes('Maxthon'),
    isIos: /(iPhone|iPad|iPod|iOS)/i.test(userAgent),
    isIE: ['compatible', 'MSIE'].every(n => userAgent.includes(n)),
    isSafari: userAgent.includes('Safari') && !userAgent.includes('Chrome'),
    isMobile: /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/gi.test(
        userAgent
    )
})

export const actions = {
    /**
     * 程序启动的时候会默认执行这个action
     * 全局设备类型
     * @param {} store
     * @param {*} param1
     */
    nuxtServerInit(store, { req, params, route }) {
        // 检查设备类型
        const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
        const { isMobile, isIE, isSafari, isEdge, isFF, isBB, isMaxthon, isIos } = uaDevice(userAgent || '')

        store.commit('global/UPDATE_USER_AGENT', userAgent)
        store.commit('global/UPDATE_MOBILE_LAYOUT_STATE', isMobile)
    }
}