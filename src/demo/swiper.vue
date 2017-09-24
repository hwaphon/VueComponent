<template>
	<div class="container">
		<div class="box">	
			<Swiper :items="items" v-model="select1" @onClick="clickHandler"></Swiper>
		</div>
		<div class="box">			
			<Swiper :items="items" v-model="select2" :arrow="arrow"></Swiper>
		</div>
	</div>
</template>
<script>
	import Swiper from '@/components/h-swiper/swiper.vue'
	export default {
		components: {
			Swiper
		},
		data () {
			return {
				items: [
					{ title: '折得一枝香在手,人间应未有', src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?dpr=1&auto=compress,format&fit=crop&w=1500&h=&q=80&cs=tinysrgb&crop='},
					{ title: '野火烧不尽,春风吹又生', src: 'https://images.unsplash.com/photo-1489619243109-4e0ea59cfe10?dpr=1&auto=compress,format&fit=crop&w=1500&h=&q=80&cs=tinysrgb&crop=' },
					{title: '无可奈何花落去,似曾相识燕归来', src:'https://images.unsplash.com/photo-1487792679672-426a0e091886?dpr=1&auto=compress,format&fit=crop&w=1500&h=&q=80&cs=tinysrgb&crop='}
				],
				select1: 0,
				select2: 0,
				arrow: true
			}
		},
		methods: {
			clickHandler (index) {
				console.log(index)
			}
		}
	}
</script>
<style scoped>
	.box {
		width: 480px;
		height: 240px;
		margin-right: 24px;
	}

	.container {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}
</style>