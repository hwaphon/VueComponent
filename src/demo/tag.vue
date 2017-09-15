<template>
	<div class="app-container">
		<div class="box">
			 <Tag :text="text" class="item"></Tag>
			 <Tag :text="text" type="circle" class="item"></Tag>
			 <Tag :text="text" type="triangle" class="item"></Tag>
		</div>

		<div class="box">
			 <Tag :text="text" class="item" :bgcolor="primary" :color="color"></Tag>
			 <Tag :text="text" type="circle" class="item" :bgcolor="primary" :color="color"></Tag>
			 <Tag :text="text" type="triangle" class="item" :bgcolor="primary" :color="color"></Tag>
		</div>

		<div class="box">
			 <Tag :text="text" class="item" :bgcolor="success" :color="color"></Tag>
			 <Tag :text="text" type="circle" class="item" :bgcolor="success" :color="color"></Tag>
			 <Tag :text="text" type="triangle" class="item" :bgcolor="success" :color="color"></Tag>
		</div>

		<div class="box">
			 <Tag :text="text" class="item" :bgcolor="warn" :color="color"></Tag>
			 <Tag :text="text" type="circle" class="item" :bgcolor="warn" :color="color"></Tag>
			 <Tag :text="text" type="triangle" class="item" :bgcolor="warn" :color="color"></Tag>
		</div>

		<div class="box">
			 <Tag :text="text" class="item" :bgcolor="error" :color="color"></Tag>
			 <Tag :text="text" type="circle" class="item" :bgcolor="error" :color="color"></Tag>
			 <Tag :text="text" type="triangle" class="item" :bgcolor="error" :color="color"></Tag>
		</div>
	</div>
</template>
<script>
	import Tag from '@/components/h-tag/tag.vue'
	export default {
		data () {
			return {
				text: 'Smart',
				primary: '#2866AB',
				success: '#28CC9E',
				warn: '#F98903',
				error: '#C62727',
				color: '#FFF'
			}
		},
		components: {
			Tag
		}
	}
</script>

<style scoped>
	.item:not(:last-child) {
		margin-right: 16px;
	}

	.box {
		margin-bottom: 24px;
		font-family: sans-serif;
	}
</style>