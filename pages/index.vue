<template lang="pug">
	index-mobile(v-if="isMobile")
	index-pc(v-else)
</template>


<script>

import indexPc from "@/components/layouts/pc/pages/index-pc"
import indexMobile from "@/components/layouts/mobile/pages/index-mobile"
import { mapState } from "vuex"

export default {
    head() {
        return {
            title: "广州市泽福工程管理有限公司"
        }
    },
    components: {
        indexPc,
        indexMobile
    },
    async fetch({ store, error }) {
        let arr = [
            store.dispatch("main/getBanner")
            .catch(err => {
                error({ statusCode: 404 })
            }).catch(err => {
                error({ statusCode: 404 })
            }),
            store.dispatch("main/getAllNotice")
            .catch(err => {
                error({ statusCode: 404 })
            }),
            store.dispatch("main/getLegalList", {
                page: 1,
				page_size: 4
            })
            .catch(err => {
                error({ statusCode: 404 })
            }),
        ]

        return Promise.all(arr)
    },
    computed: {
        ...mapState({
            isMobile: state => state.global.isMobile
        })
    },
}
</script>
