<template>
  <div class="h-radio-item" @click="clickHandler" :style="{borderBottomColor: hrcolor}">
    <div 
      :class="['h-radio-item-shape', right ? 'h-radio-item-right' : '', border ? '' : 'h-radio-item-noborder']" 
      :style="{ width: size + 'px', height: size + 'px', color: color}">
      <HIcon v-if="checked" type="check" :size="(size * 0.618).toFixed(3)"></HIcon>
    </div>
    <div class="h-radio-item-extra">
      <HIcon v-if="icon" :type="icon" :color="iconcolor" :size="iconsize" class="h-radio-item-icon"></HIcon>
      <span v-if="title" class="h-radio-item-title">{{ title }}</span>
    </div>
  </div>
</template>
<script>
  import HIcon from '../h-icon/icon.vue'
  import Event from '../../const/event'
  export default {
    components: {
      HIcon
    },
    props: {
      size: { 
        type: String | Number,
        default: '24'
      },
      right: {
        type: Boolean
      },
      border: {
        type: Boolean
      },
      color: {
        type: String
      },
      title: {
        type: String | Number,
        default: ''
      },
      /* 当前选中的值 */
      val: {
        type: String | Number | Array,
        default: ''
      },
      value: {
        type: String | Number | Array,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      iconsize: {
        type: String | Number,
        default: ''
      },
      iconcolor: {
        type: String,
        default: ''
      },
      hrcolor: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        checked: false
      }
    },
    watch: {
      val (val) {
        if (val === this.value) {
          this.checked = true
        } else {
          this.checked = false
        }
      }
    },
    methods: {
      clickHandler () {
        this.$emit(Event.CLICK, this.value)
      }
    },
    created () {
      if (this.val === this.value) {
        this.checked = true
      }
    }
  }
</script>
<style scoped>
  @import '../../styles/h-radio/radioitem.css'
</style>
