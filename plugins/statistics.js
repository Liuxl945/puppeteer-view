
// 百度统计

if(process.browser && process.env.NODE_ENV === 'production') {
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0a5ccf186031f5c488f16bc23bb8db12";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}

export default ({ app: { router }, store }) => {
    router.afterEach((to, from) => {
        if(process.browser && process.env.NODE_ENV === 'production') {
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?0a5ccf186031f5c488f16bc23bb8db12";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        }
    })
}
