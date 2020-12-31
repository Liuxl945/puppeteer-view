<template lang="pug">
    #app-mobile
        #app-aside(:class="onMobileSidebarOpenClass")
            aside-mobile(:class="onMobileSidebarOpenClass")
        #app-body(:class="onMobileSidebarOpenClass" ref="appBody")
            header-mobile
            nuxt(keep-alive)
            footer-mobile

</template>

<script>
import footerMobile from '@/components/layouts/mobile/footer-mobile.vue'
import headerMobile from '@/components/layouts/mobile/header-mobile.vue'
import asideMobile from '@/components/layouts/mobile/aside-mobile.vue'
import { mapState } from 'vuex'
export default {
    components: {
        footerMobile,
        headerMobile,
        asideMobile
    },
    computed: {
        onMobileSidebarOpenClass() {
            return { open: this.onMobileSidebar }
        },
        ...mapState({
            onMobileSidebar: state => state.global.onMobileSidebar
        })
    },
    methods: {
        closeMobileSidebar(event) {
            if(this.onMobileSidebar){
                this.$store.commit('global/UPDATE_MOBILE_SIDEBAR_ON_STATE', false)
                event.cancelBubble = true
                event.stopPropagation()
                event.preventDefault()
                return false
            }
        }
    },
    mounted() {
        this.$refs.appBody.addEventListener('click', this.closeMobileSidebar, true)
    }
}
</script>

<style lang="scss">
@import "~/static/style/variable.scss";
#app-mobile {
    #app-aside {
        width: 68%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 3000;
        transform: translateX(-100%);
        transition: $mobile-aisde-transition;
        background-color: rgba($color: $mobile-aside-bg, $alpha: 0.7);

        &.open {
            overflow: hidden;
            transform: translateX(0);
            transition: $mobile-aisde-transition;
            -webkit-overflow-scrolling: touch;
        }
    }
    .container{
        width: 100%;
    }
    #app-body {
        padding-top: 44px;
        transition: $mobile-aisde-transition;

        &.open {
            transition: $mobile-aisde-transition;
            transform: translateX(68%);
        }

        main {
            position: relative;
            width: 100%;
        }
        .container-mobile{
            min-height: calc(100vh - 200px);
        }
    }
}
</style>
