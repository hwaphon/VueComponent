<template>
	<div class="h-checklist" @click="onClick" :style="{ flexDirection: direction }">
		<ChecklistItem
			v-for="(item, index) in items"
			:key="index"
			:value="item.value"
			:title="item.title"
			:right="right"
			:size="size"
			:val="value"
			:color="color"
			:type="type"
			:hrcolor="hrcolor"
			@onClick="clickHandler"></ChecklistItem>
	</div>
</template>
<script>
	import Event from '@/const/event'
	import ChecklistItem from './checklistitem.vue'
	export default {
		components: {
			ChecklistItem
		},
		props: {
			items: {
				type: Array,
				default: () => {
					return []
				}
			},
			right: {
				type: Boolean,
				default: false
			},
			size: {
				type: String | Number,
				default: '24'
			},
			color: {
				type: String,
				default: '#333'
			},
			value: {
				type: Array
			},
			type: {
				type: String,
				default: 'rect'
			},
			direction: {
				type: String,
				default: 'column'
			},
			hrcolor: String
		},
		methods: {
			clickHandler (value) {
				let copy = this.value
				let index = copy.indexOf(value)
				if (!~index) {
					copy.push(value)
				} else {
					copy.splice(index, 1)
				}
				this.$emit('input', copy)
			},
			onClick () {
				this.$emit(Event.CLICK)
			}
		}
	}
</script>

<style>
	.h-checklist {
		display: flex;
	}
</style>