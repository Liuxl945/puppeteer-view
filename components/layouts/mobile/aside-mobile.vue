<template lang="pug">
    aside.aside
        .aside-user
            .avatar
                img(src="~/static/image/logo.png")
        .profile
            h3.name
            p.email
        .aside-nav
            nav.nav-list
                div(v-for="item in navList")
                    nuxt-link.item(:to="item.path" :title="item.name")
                        span {{item.name}}
</template>

<script>
import { mapState } from "vuex"

export default {
    data() {
        return {
            user: undefined
        }
    },
    computed: {
        ...mapState({
            navList: state => state.global.navList
        })
    }
}
</script>

<style lang="scss" scoped>
@import "~/static/style/variable.scss";

.aside {
    display: block;
    overflow: auto;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    transform: scale(0.8, 0.8);
    transition: $mobile-aisde-transition;

    &.open {
        opacity: 1;
        transform: scale(1, 1);
        transition: $mobile-aisde-transition;
    }

    > .aside-user {
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 1em;
        border-bottom: 1px solid darken($mobile-aside-bg, 5%);

        > .avatar {
            width: 80%;

            > img {
                max-width: 100%;
                border: 2px solid $module-bg;
            }
        }

        > .profile {
            color: $body-bg;
            width: 100%;

            > .name {
                font-weight: bold;
                margin-bottom: 1rem;
            }

            > .email {
                color: $primary;
                margin: 0;
                @include text-overflow();
            }
        }
    }

    > .aside-nav {
        width: 100%;

        .nav-list {
            padding: 0;
            margin: 0;

            .item {
                border: none;
                display: block;
                width: 100%;
                height: 4em;
                line-height: 4em;
                padding: 0 2em;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 700;
                border-radius: 1px;
                color: $border-color;
                margin-bottom: 0.5em;
                &:last-child {
                    margin-bottom: 0;
                }

                &:hover {
                    color: $emp-color;
                    background-color: $body-bg;
                }

                &.link-active {
                    color: $emp-color;
                    font-weight: bold;
                    background-color: $body-bg;
                }
            }
        }
    }
}
</style>
