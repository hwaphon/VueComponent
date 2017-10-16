<template>
	<div class="h-avatar" 
			 :style="{ width: size + 'px', height: size + 'px', backgroundColor: bgcolor }"
			 :class="{ 'h-avatar_circle': shape === 'circle' }"
			 @click="onclick">
		<Icon :type="icon" :size="size * 0.618" :color="iconcolor" v-if="icon"></Icon>
		<img :src="src" :alt="alt" :title="title" 
				 :style="{ width: size + 'px', height: size + 'px' }"
				 :class="{ 'h-avatar_circle': shape === 'circle' }"
				 v-if="src">
	</div>
</template>
<script>
	import Icon from '../h-icon/icon.vue'
	import Event from '../../const/event'
	export default {
		components: {
			Icon
		},
		props: {
			icon: {
				type: String,
				default: ''
			},
			size: {
				type: String | Number,
				default: '32'
			},
			iconcolor: {
				type: String,
				default: '#fff'
			},
			bgcolor: {
				type: String,
				default: '#ccc'
			},
			src: {
				type: String,
				default: ''
			},
			shape: {
				type: String,
				default: 'circle'
			},
			title: {
				type: String,
				default: ''
			},
			alt: {
				type: String,
				default: ''
			}
		},
		methods: {
			onclick () {
				this.$emit(Event.CLICK)
			}
		}
	}
</script>
<style scoped>
	@import '../../styles/h-avatar/avatar.css'
</style>