<template>
  <div class="app-container">
  	<div class="container">  		
    	<Radio v-model="checked1" :items="items1" :right="right1" :direction="direction"></Radio>
  	</div>	

  	<div class="container">  		
  	  <Radio v-model="checked2" :items="items2" :right="right" :direction="direction"></Radio>
  	</div>

    <div class="container">     
      <Radio v-model="checked3" :items="items3" :border="border" :right="right" :direction="direction"></Radio>
    </div>

    <div class="container">     
      <Radio v-model="checked4" :items="items4" :border="border" :right="right" :direction="direction" :color="color"></Radio>
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
        checked3: 'p1',
        checked4: 'q1',
    		border: false,
    		items1: [
    			{ value: 'i1', title: '吃饭' },
    			{ value: 'i2', title: '睡觉' },
    			{ value: 'i3', title: '打豆豆' }
    		],
    		items2: [
    			{ value: 't1', title: 'Google Chrome', icon: 'chrome', iconsize: 28, iconcolor: '#46466E' },
    			{ value: 't2', title: 'Safari', icon: 'safari', iconsize: 28, iconcolor: '#46466E' },
    			{ value: 't3', title: 'Firefox', icon: 'firefox', iconsize: 28, iconcolor: '#46466E' }
    		],
        items3: [
          { value: 'p1', title: '吃饭' },
          { value: 'p2', title: '睡觉' },
          { value: 'p3', title: '打豆豆' }
        ],
        items4: [
          { value: 'q1', title: 'Google Chrome', icon: 'chrome', iconsize: 28, iconcolor: '#E20049' },
          { value: 'q2', title: 'Safari', icon: 'safari', iconsize: 28, iconcolor: '#E20049' },
          { value: 'q3', title: 'Firefox', icon: 'firefox', iconsize: 28, iconcolor: '#E20049' }
        ],
    		right: true,
        right1: false,
    		direction: 'column',
        color: '#E20049'
    	}
    }
  }
</script>
<style scoped>
	.container {
		width: 480px;
    margin-bottom: 32px;
    border-bottom-style: none;
	}

	.app-container {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
	}
</style>
