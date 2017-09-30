<template>
	<div class="h-modal" v-if="value">
		<HMask @onClick="maskClick"></HMask>
		<div class="h-modal-content">
			<div class="h-modal-title" v-if="title">{{ title }}</div>
			<div class="h-modal-main">
				<slot></slot>
			</div>
			<div class="h-modal-button-group" v-if="button">
				<button class="h-modal-button-cancel h-modal-button" @click.prevent="cancelHandler">{{ cancelText }}</button>
				<button class="h-modal-button-confirm h-modal-button" @click.prevent="confirmHandler">{{ confirmText }}</button>
			</div>
		</div>
	</div>
</template>
<script>
	import HMask from '../h-mask/mask.vue'
	import Event from '@/const/event'
	export default {
		components: {
			HMask
		},
		props: {
			title: {
				default: ''
			},
			cancelText: {
				default: '取消'
			},
			confirmText: {
				default: '确定'
			},
			button: {
				type: Boolean,
				default: true
			},
			clickable: {
				type: Boolean,
				default: true
			},
			value: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			cancelHandler () {
				this.$emit(Event.CLICK, { type: 'cancel' })
			},
			confirmHandler () {
				this.$emit(Event.CLICK, { type: 'confirm' })
			},
			maskClick () {
				if (this.clickable) {
					this.$emit('input', false)
				}
			}
		}
	}
</script>

<style scoped>
	@import '../../styles/h-modal/modal.css'
</style>