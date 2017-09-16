<template>
	<div class="h-checker">
		<CheckerItem 
			v-for="(item, index) in checkerItems" 
			:title="item.title" 
			:value="item.value" 
			:key="index" 
			@onClick="clickHandler" 
			:val="value" 
			:gutter="gutter"
			:bgcolor="bgcolor"
			:color="color"
			:customStyle="customStyle"
			:checkedBorderColor="checkedBorderColor"
			:defaultBorderColor="defaultBorderColor"></CheckerItem>
	</div>
</template>
<script>
	import CheckerItem from './checkeritem.vue'
	import Event from '@/const/event'
	export default {
		props: {
			checkerItems: {
				type: Array,
				default: () => {
					return []
				}
			},
			value: {
				type: Array,
				default: () => {
					return []
				}
			},
			gutter: {
				type: String | Number
			},
			defaultBorderColor: {
				type: String
			},
			checkedBorderColor: {
				type: String
			},
			max: {
				type: Number,
				default: 1
			},
			bgcolor: String,
			color: String,
			customStyle: Object
		},
		methods: {
			clickHandler (val) {
				let copy = this.value
				let index = copy.indexOf(val)
				if (this.max === 1) {
					copy = []
					copy.push(val)
					this.$emit(Event.CHANGE, copy)
				} else if (!~index && copy.length < this.max) {
					copy.push(val)
					this.$emit(Event.CHANGE, copy)
				} else if (!!~index) {
					copy.splice(index, 1)
					this.$emit(Event.CHANGE, copy)
				}
				this.$emit('input', copy)
			}
		},
		components: {
			CheckerItem
		}
	}
</script>
