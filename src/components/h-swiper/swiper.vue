<template>
	<div class="h-swiper" @click="clickHandler">
		<SwiperItem 
			v-for="(item, index) in items"
			:title="item.title"
			:src="item.src"
			:key="index"
			:index="index"
			:select="value"
			></SwiperItem>

		<div 
			v-for="(item, index) in items"
			class="h-swiper-dot"
			:class="[ value === (items.length - index - 1 )? 'h-swiper-dot-show' : '' ]"
			:style="{ right: 20 * (index + 1) + 'px' }">
				<span class="h-swiper-dot-select"
					:style="{ backgroundColor: color }">
				</span>
		</div>
		
		<div class="h-arrow-container" v-if="arrow">
			<Icon 
				type="chevron-circle-left" 
				color="rgba(255,255,255,.5)" 
				size="36" 
				class="h-left-arrow h-arrow"
				@onClick="leftClick">
			</Icon>
			<Icon 
				type="chevron-circle-right" 
				color="rgba(255,255,255,.5)" 
				size="36" 
				class="h-right-arrow h-arrow"
				@onClick="rightClick">
			</Icon>
		</div>
	</div>
</template>
<script>
	import SwiperItem from './swiperitem.vue'
	import Icon from '../h-icon/icon.vue'
	import Event from '@/const/event'
	export default {
		components: {
			SwiperItem, Icon
		},
		props: {
			items: {
				type: Array,
				default: () => {
					return []
				}
			},
			value: {
				type: Number
			},
			interval: {
				type: Number,
				default: 3
			},
			color: {
				type: String,
				default: '#F46060'
			},
			arrow: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				timeid: ''
			}
		},
		methods: {
			swiper () {
				let copy = this.value
				this.$emit('input', (copy + 1) % this.items.length)
				this.timeid = setTimeout(this.swiper, this.interval * 1000)
			},
			leftClick () {
				clearTimeout(this.timeid)
				let copy = this.value
				if (copy - 1 < 0) {
					copy = this.items.length - 1
				} else {
					copy = copy - 1
				}
				this.$emit('input', copy)
				this.timeid = setTimeout(this.swiper, this.interval * 1000)
			},
			rightClick () {
				clearTimeout(this.timeid)
				this.swiper()
			},
			clickHandler () {
				this.$emit(Event.CLICK, this.value)
			}
		},
		created () {
			this.timeid = setTimeout(this.swiper, this.interval * 1000)
		}
	}
</script>

<style scoped>
	@import "../../styles/h-swiper/swiper.css"
</style>