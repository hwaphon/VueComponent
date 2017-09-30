<template>
	<div class="h-mask" @click="clickHandler">
	</div>
</template>
<script>
	import Event from '@/const/event'
	export default {
		methods: {
			clickHandler () {
				this.$emit(Event.CLICK)
			}
		}
	}
</script>
<style scoped>
	@import '../../styles/h-mask/mask.css'
</style>