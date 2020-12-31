<template lang="pug">
    section.footer
        p © 2018-{{now}} 广州市泽福工程管理有限公司
        p 版权所有 粤ICP备2020124501号
        .last
            p.tips  地址：广州市天河区天河北路663号大院自编9栋101号
            p.tips  全国热线：020-38894125
            p.tips  联系邮箱：gzzefu@qq.com
</template>

<script>
import moment from "moment"
export default {
    data() {
        return {
            now: moment().format("YYYY")
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/static/style/variable.scss";
.footer{
    padding: 10px 0;
    background-color: rgba($color: $mobile-aside-bg, $alpha: 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p,
    .link{
        padding: 5px 0;
        white-space: nowrap;
        color: $border-color;
    }
    .href{
        color: $border-color;
    }
    .last {
        text-align: center;
        line-height: 16px;
        .tips {
            margin: 0 30px;
        }
        a {
            color: $border-color;
            text-decoration: none;
        }
    }
}
</style>
