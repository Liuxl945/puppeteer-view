<template lang="pug">
  section.total_bottom
    .container
        .last.copyright © 2018-{{now}} 广州市泽福工程管理有限公司 版权所有 粤ICP备2020124501号
        .last
            span.tips  地址：广州市天河区天河北路663号大院自编9栋101号
            span.tips  全国热线：020-38894125
            span.tips  联系邮箱：gzzefu@qq.com
        .shangbiaos
            a.icon(href="")
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

<style lang="scss">
@import "~/static/style/variable.scss";
.total_bottom {
    background: rgba($color: $mobile-aside-bg, $alpha: 0.7);
    color: $border-color;
    padding-top: 25px;
    height: 100px;
    .last {
        text-align: center;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        margin-bottom: 15px;
        .tips{
            margin: 0 30px;
        }
        a {
            color: $border-color;
            text-decoration: none;
        }
    }
}
</style>
