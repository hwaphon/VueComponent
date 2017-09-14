<template>
  <span :class="['fa', 'fa-' + type]" :style="styleObj"></span>
</template>
<script>
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
		}
	}
</script>