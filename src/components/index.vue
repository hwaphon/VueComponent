<template>
	<div class="app">
		<div class="box" @click="iconClick">
			<img src="http://ojihaa8pb.bkt.clouddn.com/icon_Snake.png" alt="icon_snake">
			<span class="text">Icon</span>
		</div>
		<div class="box" @click="radioClick">
			<img src="http://ojihaa8pb.bkt.clouddn.com/icon_Tiger.png" alt="icon_tiger">
			<span class="text">Radio</span>
		</div>
		<div class="box" @click="tagClick">
			<img src="http://ojihaa8pb.bkt.clouddn.com/icon_Wolf.png" alt="icon_wolf">
			<span class="text">Tag</span>
		</div>
		<div class="box" @click="checkerClick">
			<img src="http://ojihaa8pb.bkt.clouddn.com/icon_sea-horse.png" alt="icon_wolf">
			<span class="text">Checker</span>
		</div>
		<div class="box" @click="checklistClick">
			<img src="http://ojihaa8pb.bkt.clouddn.com/iconicon_Sheep.png" alt="icon_wolf">
			<span class="text">Checklist</span>
		</div>
		<div class="box" @click="swiperClick">
			<img src="http://ojihaa8pb.bkt.clouddn.com/icon_Rooster.png" alt="icon_wolf">
			<span class="text">Swiper</span>
		</div>
		<div class="box" @click="modalClick">
			<img src="http://ojihaa8pb.bkt.clouddn.com/icon_Rabbit.png" alt="icon_rabbit">
			<span class="text">Modal</span>
		</div>
		<div class="box" @click="avatarClick">
			<img src="http://ojihaa8pb.bkt.clouddn.com/icon_Lion.png" alt="icon_lion">
			<span class="text">Avatar</span>
		</div>
		<div class="box" @click="buttonClick">
			<img src="http://ojihaa8pb.bkt.clouddn.com/icon_Monkey.png" alt="icon_Monkey">
			<span class="text">Button</span>
		</div>
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
			},
			tagClick () {
				this.$router.push('tag')
			},
			checkerClick () {
				this.$router.push('checker')
			},
			checklistClick () {
				this.$router.push('checklist')
			},
			swiperClick () {
				this.$router.push('swiper')
			},
			modalClick () {
				this.$router.push('modal')
			},
			avatarClick () {
				this.$router.push('avatar')
			},
			buttonClick () {
				this.$router.push('button')
			}
		}
	}
</script>

<style scoped>
	.app {
		display: flex;
		flex-flow: row wrap;
		padding: 16px 5%;
		justify-content: center;
	}

	.box {
		width: 240px;
		height: 180px;
		border: 1px solid #ccc;
		margin-right: 16px;
		margin-top: 16px;
		cursor: pointer;
		background-color: #2c3e50;
		font-size: 36px;
		font-family: sans-serif;
		color: #FFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
	}

	.box:last-child {
		margin-right: 0px;
	}

	.text {
		margin-top: 12px;
	}
</style>