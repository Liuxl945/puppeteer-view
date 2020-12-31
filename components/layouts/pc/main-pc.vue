<template lang="pug">
    #app-pc
        header-pc.header
        nuxt(keep-alive)
        footer-pc
</template>

<script>

import footerPc from "./footer-pc.vue"
import headerPc from "./header-pc.vue"

export default {
    name: "index-pc",
    components: {
        footerPc,
        headerPc
    }
}
</script>

<style lang="scss" scoped>
#app-pc{
    padding-top: 60px;
    min-height: 100vh;
    .b{
        color: "#ff0000";
    }

}
</style>
