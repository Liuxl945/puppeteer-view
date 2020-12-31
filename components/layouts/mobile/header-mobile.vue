<template lang="pug">
    section.header
        .navbar(@click.stop="toggleSidebar(!onMobileSidebar)")
            .line
            .line
            .line
        .logo
            img(src="~/static/image/logo.png")
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            onMobileSidebar: state => state.global.onMobileSidebar
        })
    },
    methods: {
        toggleSidebar(open) {
            this.$store.commit('global/UPDATE_MOBILE_SIDEBAR_ON_STATE', open)
        }
    },
    watch: {
        '$route'(newVel, oldVel) {
            this.toggleSidebar(false)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/static/style/variable.scss";

.header{
    background: #ffffff;
    box-shadow: 0 0 5px rgba($font-color, 0.4);
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 44px;
    display: flex;
    .navbar{
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        .line{
            height: 2px;
            width: 24px;
            margin-bottom: 5px;
            background: $font-color;
            &:last-of-type{
                margin-bottom: 0;
            }
        }
    }
    .logo{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: 28px;
        }
    }
}
</style>

