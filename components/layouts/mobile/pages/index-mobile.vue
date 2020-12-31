<template lang="pug">
    .container.container-mobile
        v-banner

        v-business
        .v-legal-wapper
            v-legal
            nuxt-link.link(to="/legal") 查看更多

        .notice-wapper
            template(v-for="(item,index) in allNotice")
                .wapper
                    v-notice(:title="item.ly_name" :data="item.list")
                    nuxt-link.link(:to="'/infomation?id=' + item.id") 查看更多

                .w-20(v-if="index < allNotice.length")
</template>

<script>

import Banner from "@/components/banner/index"
import Business from "@/components/business/index"
import Legal from "@/components/legal/index"
import Notice from "@/components/notice/index"

import { mapState } from "vuex"

export default {
    components: {
        "v-banner": Banner,
        "v-business": Business,
        "v-legal": Legal,
        "v-notice": Notice,
    },
    computed: {
        ...mapState({
            allNotice: state => state.main.allNotice,
        })
    }

}
</script>

<style lang="scss" scoped>
@import "~/static/style/variable.scss";

.v-legal-wapper{
    position: relative;
    .link{
        position: absolute;
        right: 10px;
        top: 4px;
        color: $emp-color;
    }
}
.wapper{
    position: relative;
    .link{
        position: absolute;
        right: 10px;
        top: 4px;
        color: $emp-color;
    }
}
</style>
