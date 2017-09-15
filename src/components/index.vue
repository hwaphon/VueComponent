<template>
	<div class="app">
		<div class="box" @click="iconClick">Icon</div>
		<div class="box" @click="radioClick">Radio</div>
	</div>
</template>

<script>
	export default {
		methods: {
			iconClick () {
				this.$router.push('icon')
			},
			radioClick () {
				this.$router.push('radio')
			}
		}
	}
</script>

<style scoped>
	.app {
		display: flex;
		flex-flow: row wrap;
		padding: 16px 5%;
	}

	.box {
		width: 240px;
		height: 180px;
		border: 1px solid #ccc;
		margin-right: 16px;
		cursor: pointer;
		background-color: #2c3e50;
		font-size: 48px;
		font-family: sans-serif;
		color: #FFF;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
	}

	.box:last-child {
		margin-right: 0px;
	}
</style>