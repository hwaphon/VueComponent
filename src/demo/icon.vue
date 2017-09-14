<template>
	<div class="container">
		<Icon v-for="icon in icons" :type="icon.type"></Icon>
	</div>
</template>
<script>
	import Icon from '@/components/h-icon/icon.vue'
	export default {
		components: {
			Icon
		},
		data () {
			return {
				icons: [
					{type: 'google'},
					{type: 'safari'},
					{type: 'firefox'},
					{type: 'opera'},
					{type: 'edge'},
					{type: 'github'},
					{type: 'qq'},
					{type: 'renren'},
					{type: 'weibo'},
					{type: 'weixin'},
					{type: 'windows'}
				]
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 480px;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
	}
</style>