<template>
	<div class="h-checker-item" @click="clickHandler" :style="[styleObject, customStyle]">
		<span class="h-checker-item-text">{{ title }}</span>
	</div>
</template>
<script>
	import Event from '@/const/event'
	export default {
		props: {
			title: {
				type: String | Number,
				default:''
			},
			value: {
				type: String | Number,
				default: ''
			},
			val: {
				type: Array
			},
			checkedBorderColor: {
				type: String,
				default: '#12CC94'
			},
			defaultBorderColor: {
				type: String,
				default: '#ccc'
			},
			gutter: {
				type: String | Number,
				default: '0'
			},
			bgcolor: {
				type: String,
				default: '#FFF'
			},
			color: {
				type: String,
				default: '#333'
			},
			customStyle: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data () {
			return {
				checked: false
			}
		},
		methods: {
			clickHandler () {
				this.$emit(Event.CLICK, this.value)
			}
		},
		computed: {
			styleObject () {
				return {
					borderColor: this.checked ? this.checkedBorderColor : this.defaultBorderColor,
					marginRight: `${this.gutter}px`,
					backgroundColor: this.bgcolor,
					color: this.color
				}
			}
		},
		watch: {
			val (val) {
				if (!!~val.indexOf(this.value)) {
					this.checked = true
				} else {
					this.checked = false
				}
			}
		},
		created () {
			if (!!~this.val.indexOf(this.value)) {
				this.checked = true
			}
		}
	}
</script>
<style scoped>
	.h-checker-item {
		display: inline-block;
		padding: 5px 16px;
		border: 1px solid;
		cursor: pointer;
	}

	.h-checker-item:active {
		background-color: #eee;
	}
</style>