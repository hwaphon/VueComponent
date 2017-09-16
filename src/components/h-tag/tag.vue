<template>
	<div 
		@click="clickHandler"
		:class="['h-tag', circle ? 'circle' : '']" 
		:style="{ backgroundColor: bgcolor, color: color, marginLeft: margin }">
		<span v-if="triangle" class="triangle" :style="{ color: bgcolor }"></span>
		<span>{{ text }}</span>
	</div>
</template>
<script>
	import Event from '../../const/event'
	export default {
		props: {
			text: {
				type: String,
				default: ''
			},
			bgcolor: {
				type: String,
				default: '#ccc'
			},
			color: {
				type: String,
				default: '#333'
			},
			type: {
				type: String,
				default: ''
			}
		},
		data () {
			return {
				circle: false,
				triangle: false
			}
		},
		mounted () {
			if (this.type === 'circle') {
				this.circle = true
			}

			if (this.type === 'triangle') {
				this.triangle = true
			}
		},
		computed: {
			margin () {
				if (this.triangle) {
					return '17px'
				}
			}
		},
		methods: {
			clickHandler () {
				this.$emit(Event.CLICK, this.text)
			}
		}
	}
</script>
<style scoped>
	@import '../../styles/h-tag/tag.css'
</style>