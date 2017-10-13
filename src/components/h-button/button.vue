<template>
	<div class="h-button"
		:style="{ width: width + 'px', height: height + 'px', borderColor: finalbordercolor, backgroundColor: finalcolor, borderRadius: radius + 'px', color: color }"
		:class="{ 'h-button_disabled': disabled }"
		@click="onclick">
		{{ text }}
	</div>
</template>
<script>
	import Event from '@/const/event'
	export default {
		props: {
			text: {
				type: String,
				default: ''
			},
			width: {
				type: String | Number,
				default: 240
			},
			height: {
				type: String | Number,
				default: 48
			},
			bordercolor: {
				type: String,
				default: '#ccc'
			},
			bgcolor: {
				type: String,
				default: '#FFF'
			},
			color: {
				type: String,
				default: '#333'
			},
			radius: {
				type: String | Number,
				default: 6
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onclick () {
				if (!this.disabled) {	
					this.$emit(Event.CLICK)
				}
			}
		},
		computed: {
			finalcolor () {
				if (!this.disabled) {
					return this.bgcolor
				} else {
					return 'rgba(0, 0, 0, 0.1)'
				}
			},
			finalbordercolor () {
				if (!this.disabled) {
					return this.bordercolor
				} else {
					return 'rgba(0, 0, 0, 0.1)'
				}
			}
		}
	}
</script>
<style scoped>
	@import "../../styles/h-button/button.css"
</style>