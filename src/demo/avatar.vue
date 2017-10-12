<template>
	<div class="avatar-container">
		<div class="row">
			<Avatar icon="gitlab" size="24" shape="square"></Avatar>
			<Avatar icon="github" size="32" shape="square"></Avatar>
			<Avatar icon="google" size="48" shape="square"></Avatar>
		</div>

		<div class="row">
			<Avatar icon="gitlab" size="24" bgcolor="#333" iconcolor="#fff"></Avatar>
			<Avatar icon="github" size="32" bgcolor="#333" iconcolor="#fff"></Avatar>
			<Avatar icon="google" size="48" bgcolor="#333" iconcolor="#fff"></Avatar>
		</div>

		<div class="row">
			<Avatar src="http://ownp5gqo8.bkt.clouddn.com/avatar.png" size="24"></Avatar>
			<Avatar src="http://ownp5gqo8.bkt.clouddn.com/avatar.png" size="32"></Avatar>
			<Avatar src="http://ownp5gqo8.bkt.clouddn.com/avatar.png" size="48"></Avatar>
		</div>
	</div>
</template>
<script>
	import Avatar from '@/components/h-avatar/avatar.vue'
	export default {
		components: {
			Avatar
		}
	}
</script>
<style scoped>
	.avatar-container {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
	}

	.row {
		width: 240px;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-around;
		margin-top: 24px;
	}
</style>