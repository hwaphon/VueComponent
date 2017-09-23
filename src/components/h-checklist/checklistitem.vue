<template>
	<div class="h-checklist-item" @click="clickHandler" 
		:style="{ borderBottomColor: hrcolor} ">
		<div 
			class="h-shape-container" 
			:style="{ width: size + 'px', height: size + 'px', color: color }"
			:class="[ right ? 'h-shape-container-right' : '', type === 'circle' ? 'h-shaper-container-circle' : '' ]">
			<Icon v-if="checked" type="check" :size="(size * 0.618).toFixed(3)"></Icon>
		</div>
		<div class="h-extra">
			<span class="h-title">{{ title }}</span>
		</div>
	</div>
</template>
<script>
	import Icon from '../h-icon/icon.vue'
	import Event from '@/const/event'
	export default {
		components: {
			Icon
		},
		props: {
			size: {
				type: String | Number
			},
			color: {
				type: String
			},
			title: {
				type: String | Number
			},
			right: {
				type: Boolean
			},
			value: {
				type: String | Number | Array
			},
			val: {
				type: Array
			},
			type: {
				type: String
			},
			hrcolor: {
				type: String,
				default: 'transparent'
			}
		},
		data () {
			return {
				checked: false
			}
		},
		watch: {
			val (val) {
				if (!!~this.val.indexOf(this.value)) {
					this.checked = true
				} else {
					this.checked = false
				}
			}
		},
		methods: {
			clickHandler () {
				this.$emit(Event.CLICK, this.value)
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
	@import "../../styles/h-checklist/checklistitem.css"
</style>