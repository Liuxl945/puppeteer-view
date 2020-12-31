<template lang="pug">
    section.header-navigation
        .container
            .logo
                nuxt-link(to="/" title="有信誉•有未来")
                    img(src="~/static/image/logo.png")
            .header-nav#header_nav
                ul.list
                    li.item(v-for="item in navList" :key="item.name")
                        nuxt-link.link(:to="item.path") {{item.name}}
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

.header-navigation {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 3000;
    background: rgba($color: #ffffff, $alpha: 0.95);
    height: 60px;
    border-bottom: 1px solid $border-light-color;
    overflow: hidden;

    .container {
        display: flex;
        height: 60px;
    }

    .logo {
        min-width: 363px;
        padding: 10px 30px 5px 0;
        a {
            display: block;
        }
        img {
            height: 40px;
        }
    }
    .header-nav {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .list {
            height: 30px;
            line-height: 30px;
            display: flex;
            .item {
                width: 90px;
                margin-right: 15px;
                .link{
                    cursor: pointer;
                    font-size: 16px;
                    text-align: center;
                    border-radius: 6px;
                    display: block;
                    color: $base-color;
                    // font-weight: 600;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    &:hover,
                    &.nuxt-link-exact-active {
                        background: rgba($color: $global-color, $alpha: 0.9);
                        color: #ffffff;
                    }

                }
                &:last-of-type{
                    margin-right: 0;
                }

                &:nth-of-type(n + 2) {
                    .link{
                        &.nuxt-link-active {
                            background: rgba($color: $global-color, $alpha: 0.9);
                            color: #ffffff;
                        }
                    }
                }
            }

        }

    }
    .header-login,
    .user-info {
        display: flex;
        align-items: center;
        justify-content: center;
        .login {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            svg {
                transform: translateY(1px);
            }
        }
        .register {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
        .login,
        .register {
            height: 30px;
            background: $bg-color;
            width: 80px;
            text-align: center;
            line-height: 30px;

            .svg-icon{
                margin-right: 5px;
            }

            a {
                cursor: pointer;
                font-size: 12px;
                color: $emp-color;
                text-decoration: none;
                transition: all 0.2s ease;
                justify-content: center;
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .line {
            height: 20px;
            width: 1px;
            background: #bbbbbb;
        }
        .svg-icon {
            font-size: 12px;
            color: $emp-color;
            padding-right: 6px;
        }
    }
    .user-info {
        .login {
            width: auto;
            padding: 0 15px;
            cursor: pointer;
            color: $emp-color;
        }
        .line {
            right: 95px;
        }
        .register {
            cursor: pointer;
            .svg-icon {
                color: $font-color;
                svg {
                    transform: translateY(2px);
                }
            }
        }
    }
}

</style>
