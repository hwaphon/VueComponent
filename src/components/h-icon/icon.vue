<template>
  <span :class="['fa', 'fa-' + type]" :style="styleObj" @click="clickHandler"></span>
</template>
<script>
	import Event from '../../const/event'
	export default {
		props: {
			type: {
				type: String,
				default: ''
			},
			size: {
				type: String | Number,
				default: '28'
			},
			color: {
				type: String,
				default: ''
			}
		},
		computed: {
			styleObj () {
				return {
					fontSize: this.size + 'px',
					color: this.color || ''
				}
			}
		},
		methods: {
			clickHandler () {
				this.$emit(Event.CLICK)
			}
		}
	}
</script>