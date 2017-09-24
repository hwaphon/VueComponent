<template>
	<transition name="swiper">
		<div class="h-swiper-item" v-show="select === index">
			<img :src="src" :alt="title" class="h-swiper-item-img">
			<span class="h-swiper-title">{{ title }}</span>
		</div>
	</transition>
</template>
<script>
	export default {
		props: {
			src: {
				type: String,
				default: ''
			},
			title: {
				type: String | Number,
				default: ''
			},
			index: {
				type: Number
			},
			select: {
				type: Number
			}
		}
	}
</script>

<style scoped>
	@import '../../styles/h-swiper/swiperitem.css'
</style>