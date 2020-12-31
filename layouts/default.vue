<template lang="pug">
#app
	mobile-view(v-if="isMobile")
	pc-view(v-else)
</template>

<script>
import pcView from "@/components/layouts/pc/main-pc"
import mobileView from "@/components/layouts/mobile/main-mobile"
export default {
	components: {
    pcView,
    mobileView
	},
	computed: {
		isMobile() {
			return this.$store.state.global.isMobile
		}
	}
}
</script>

<style lang="scss" scoped>
#app {
	background: #f0f0f0;
	// background-image: url("../static/image/background-3.jpg");
	transform: none;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: center 0;
}
</style>
