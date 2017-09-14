<template>
  <div class="h-radio" :style="{ flexDirection: direction }">
  	<RadioItem 
  		v-for="item in items" 
  		:key="item.value"
  		:value="item.value"
  		:title="item.title"
  		:icon="item.icon"
  		:iconsize="item.iconsize"
  		:iconcolor="item.iconcolor"
  		:size="size"
  		:right="right"
  		:border="border"
  		:color="color"
  		:val="value"
      :hrcolor="hrcolor"
  		@onClick="clickHandler">
  		</RadioItem>
  </div>
</template>
<script>
  import RadioItem from '@/components/h-radio/radioitem'
  export default {
  	props: {
  		size: { 
  		  type: String | Number,
  		  default: '24'
  		},
  		right: {
  		  type: Boolean,
  		  default: false
  		},
  		border: {
  		  type: Boolean,
  		  default: true
  		},
  		color: {
  		  type: String,
  		  default: '#2c3e50'
  		},
  		value: {
  			type: String,
  			default: ''
  		},
  		items: {
  			type: Array,
  			default: () => {
  				return []
  			}
  		},
      direction: {
        type: String,
        default: 'column'
      },
      hrcolor: {
        type: String,
        default: '#ccc'
      }
  	},
  	methods: {
  		clickHandler (e) {
  			console.log(e)
  			this.$emit('input', e)
  		}
  	},
  	components: {
  		RadioItem
  	}
  }
</script>

<style>
  .h-radio {
    display: flex;
    justify-content: space-around;
  }
</style>
