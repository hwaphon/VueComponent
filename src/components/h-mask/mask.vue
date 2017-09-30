<template>
	<div class="h-mask" @click="clickHandler" v-if="show">
	</div>
</template>
<script>
	export default {
		props: {
			clickable: {
				type: Boolean,
				default: true
			}
		},
		data () {
			return {
				show: true
			}
		},
		methods: {
			clickHandler () {
				if (this.clickable && this.show) {
					this.show = false
				}
			}
		}
	}
</script>
<style scoped>
	@import '../../styles/h-mask/mask.css'
</style>