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
	.h-tag {
		background-color: #ccc;
		display: inline-block;
		padding: 0 16px;
		height: 34px;
		line-height: 34px;
		position: relative;
	}

	.circle {
		border-radius: 17px;
	}

	.triangle {
		width: 34px;
		height: 34px;
		position: absolute;
		left: -34px;
		top: 0px;
	}

	.triangle::before {
		content: "";
		position: absolute;
		width: 0px;
		height: 0px;
		border: 17px solid;
		border-top-color: transparent;
		border-bottom-color: transparent;
		border-left-color: transparent;
		top: 0;
		right: 0;
	}
</style>