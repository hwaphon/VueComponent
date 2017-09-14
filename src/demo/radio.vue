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
    		checked1: 'item1',
    		checked2: 't2',
    		border: true,
    		items1: [
    			{ value: 'item1', title: 'item1' },
    			{ value: 'item2', title: 'item2' },
    			{ value: 'item3', title: 'item3' }
    		],
    		items2: [
    			{ value: 'item1', title: 't1', icon: 'chrome', iconsize: 28, iconcolor: '#46466E' },
    			{ value: 'item2', title: 't2', icon: 'safari', iconsize: 28, iconcolor: '#46466E' },
    			{ value: 'item3', title: 't3', icon: 'firefox', iconsize: 28, iconcolor: '#46466E' }
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
