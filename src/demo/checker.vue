<template>
	<div class="checker">
		<div class="box">
			<span class="text">单选</span>
			<Checker 
				:checkerItems="items" 
				v-model="checked" 
				:gutter="gutter" 
				:max="max">
				</Checker>
		</div>

		<div class="box">
			<span class="text">单选, 改变选中时的颜色</span>
			<Checker 
				:checkerItems="items" 
				v-model="checked" 
				:gutter="gutter" 
				checkedBorderColor="#58e"
				:max="max">
				</Checker>
		</div>

		<div class="box">
			<span class="text">最多可选 2 个</span>
			<Checker 
				:checkerItems="items2" 
				v-model="checked2" 
				:gutter="gutter" 
				:max="max2">
				</Checker>
		</div>
	</div>
</template>
<script>
	import Checker from '@/components/h-checker/checker.vue'
	export default {
		data () {
			return {
				items: [
					{ title: 'A', value: 1 },
					{ title:'B', value: 2 },
					{ title: 'C', value: 3 },
					{ title: 'D', value: 4 }
				],
				items2: [
					{ title: 'HTML', value: 1 },
					{ title:'CSS', value: 2 },
					{ title: 'JavaScript', value: 3 },
					{ title: 'Vue', value: 4 }
				],
				checked: [],
				checked2: [],
				gutter: 10,
				max: 1,
				max2: 2,
				color: '#fff'
			}
		},
		components: {
			Checker
		},
		watch: {
			checked (val) {
				console.log(val)
			}
		}
	}
</script>
<style scoped>
	.box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;
		width: 480px;
		margin: 32px auto;
	}
</style>