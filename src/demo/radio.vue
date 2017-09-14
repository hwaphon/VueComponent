<template>
  <div class="app-container">
  	<div class="container">  		
    	<Radio v-model="checked1" :items="items1" :right="right" :border="border" :direction="direction"></Radio>
  	</div>	

  	<div class="container">  		
  	  <Radio v-model="checked2" :items="items2" :right="right" :border="border" :direction="direction"></Radio>
  	</div>	
  </div>
</template>
<script>
  import Radio from '@/components/h-radio/radio'
  export default {
    components: {
      Radio
    },
    data () {
    	return {
    		checked1: 'i1',
    		checked2: 't2',
    		border: true,
    		items1: [
    			{ value: 'i1', title: '吃饭' },
    			{ value: 'i2', title: '睡觉' },
    			{ value: 'i3', title: '打豆豆' }
    		],
    		items2: [
    			{ value: 't1', title: 'Google', icon: 'chrome', iconsize: 28, iconcolor: '#46466E' },
    			{ value: 't2', title: 't2', icon: 'safari', iconsize: 28, iconcolor: '#46466E' },
    			{ value: 't3', title: 't3', icon: 'firefox', iconsize: 28, iconcolor: '#46466E' }
    		],
    		right: true,
    		direction: 'column'
    	}
    }
  }
</script>
<style scoped>
	.container {
		width: 480px;
		border: 1px solid #ccc;
		border-bottom-style: none;
	}

	.app-container {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
	}
</style>
