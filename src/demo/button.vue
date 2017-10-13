<template>
	<div class="button-container">
		<div class="row">
			<HButton :width="smallwidth" :height="smallheight" :text="text"></HButton>
			<HButton :width="mediumwidth" :height="mediumheight" :text="text"></HButton>
			<HButton :width="largewidth" :height="largeheight" :text="text"></HButton>
			<HButton :width="largewidth" :height="largeheight" :text="text" :radius="largeheight"></HButton>
		</div>

		<div class="row">
			<HButton :width="smallwidth" :height="smallheight" :text="text" :bgcolor="bgcolor1" :color="color" :bordercolor="bgcolor1"></HButton>
			<HButton :width="mediumwidth" :height="mediumheight" :text="text" :bgcolor="bgcolor1" :color="color" :bordercolor="bgcolor1"></HButton>
			<HButton :width="largewidth" :height="largeheight" :text="text" :bgcolor="bgcolor1" :color="color" :bordercolor="bgcolor1"></HButton>
			<HButton :width="largewidth" :height="largeheight" :text="text" :radius="largeheight" :bgcolor="bgcolor1" :color="color" :bordercolor="bgcolor1"></HButton>
		</div>

		<div class="row">
			<HButton :width="smallwidth" :height="smallheight" :text="text" :bgcolor="bgcolor2" :color="color" :bordercolor="bgcolor2"></HButton>
			<HButton :width="mediumwidth" :height="mediumheight" :text="text" :bgcolor="bgcolor2" :color="color" :bordercolor="bgcolor2"></HButton>
			<HButton :width="largewidth" :height="largeheight" :text="text" :bgcolor="bgcolor2" :color="color" :bordercolor="bgcolor2"></HButton>
			<HButton :width="largewidth" :height="largeheight" :text="text" :radius="largeheight" :bgcolor="bgcolor2" :color="color" :bordercolor="bgcolor2"></HButton>
		</div>

		<div class="row">
			<HButton :width="smallwidth" :height="smallheight" :text="text" :disabled="disabled"></HButton>
			<HButton :width="mediumwidth" :height="mediumheight" :text="text" :disabled="disabled"></HButton>
			<HButton :width="largewidth" :height="largeheight" :text="text" :disabled="disabled"></HButton>
			<HButton :width="largewidth" :height="largeheight" :text="text" :radius="largeheight" :disabled="disabled"></HButton>
		</div>
	</div>
</template>
<script>
	import HButton from '@/components/h-button/button.vue'
	export default {
		components: {
			HButton
		},
		data () {
			return {
				smallwidth: '64',
				smallheight: '24',
				mediumwidth: '128',
				mediumheight: '32',
				largewidth: '192',
				largeheight: '36',
				text: 'Button',
				bgcolor1: '#F03861',
				bgcolor2: '#1FAD9F',
				color: '#FFF',
				disabled: true
			}
		},
		methods: {
			onclick () {
				console.log('click')
			}
		}
	}
</script>
<style scoped>
	.button-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.row {
		width: 720px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 24px;
	}
</style>