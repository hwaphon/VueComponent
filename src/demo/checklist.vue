<template>
	<div class="container">
		<div class="checklist">
			<Checklist 
				:items="items" 
				:right="!right"
				:hrcolor="hrcolor" 
				:type="type"
				v-model="value" 
				@onClick="clickHandler"
				:color="color"></Checklist>
		</div>
		<div class="checklist">
			<Checklist 
				:items="items" 
				:right="right"
				:hrcolor="hrcolor" 
				v-model="value" 
				@onClick="clickHandler"
				:color="color"></Checklist>
		</div>

		<div class="checklist">
			<Checklist 
				:items="items" 
				:right="right"
				v-model="value" 
				:type="type"
				direction="row"
				@onClick="clickHandler"
				:color="color"></Checklist>
		</div>

		<div class="checklist">
			<Checklist 
				:items="items" 
				:right="right"
				v-model="value" 
				direction="row"
				@onClick="clickHandler"
				:color="color"></Checklist>
		</div>
	</div>
</template>
<script>
	import Checklist from '@/components/h-checklist/checklist.vue'
	export default {
		components: {
			Checklist
		},
		data () {
			return {
				items: [
					{ title: 'CSS3', value: 'item1' },
					{ title: 'ES6', value: 'item2' },
					{ title: 'Node', value: 'item3' }
				],
				right: false,
				value: [ 'item1' ],
				color: '#46466E',
				type: 'circle',
				hrcolor: '#ccc'
			}
		},
		methods: {
			clickHandler () {
				console.log(this.value)
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-flow: row wrap;
	}
	.checklist {
		width: 480px;
		margin: 24px auto;
	}
</style>