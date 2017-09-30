<template>
	<div class="mask-container">
		<button @click.prevent="openBaseModal" class="button">弹出基础的 Modal</button>
		<transition name="custom">
			<Modal :title="title" @onClick="clickHandler" v-model="show">
				<div class="content">
					<p>这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容，这是一些内容</p>
				</div>
			</Modal>
		</transition>

		<button @click.prevent="opencustomModal" class="button">打开英语流利说笔试demo</button>
		<transition name="custom">
			<Modal :button="button" v-model="customeshow">
				<div class="custom-container">
					<img src="http://ojihaa8pb.bkt.clouddn.com/fail.png" alt="fail" class="custom-img">
					<h3 class="custom-title">一些文本</h3>
					<p>另外一些文本</p>
				</div>
			</Modal>
		</transition>
	</div>
</template>
<script>
	import Modal from '@/components/h-modal/modal.vue'
	export default {
		components: {
			Modal
		},
		data () {
			return {
				click: false,
				title: '这只是普通的 Modal title',
				show: false,
				button: false,
				customeshow: false
			}
		},
		methods: {
			clickHandler (v) {
				if (v.type === 'confirm') {}
				if (v.type === 'cancel') {}
				this.show = false
			},
			openBaseModal () {
				this.show = true
			},
			opencustomModal () {
				this.customeshow = true
			}
		}
	}
</script>
<style>
	.custom-enter, .custom-leave-to {
		opacity: 0;
	}

	.custom-enter-active, .custom-leave-active {
		transition: all .5s;
	}

	.custom-enter-to, .custom-leave {
		opacity: 1;
	}

	.custom-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.custom-img {
		width: 128px;
		margin-bottom: 16px;
	}

	.custom-title {
		margin-bottom: 12px;
	}

	.mask-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.button {
		display: inline-block;
		outline: none;
		border: none;
		margin-bottom: 24px;
		background-color: #00B8A9;
		color: #fff;
		padding: 12px 18px;
		cursor: pointer;
		border-radius: 8px;
	}
</style>