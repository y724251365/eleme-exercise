<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
      <router-link to="/goods" class="link">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" class="link">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" class="link">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue';
export default {
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
    .tab
      display:flex
      width:100%
      height:40px
      line-height:40px
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex:1
        text-align: center
        &.link
          display:block
          // 针对行内元素用户点击只能点击内容区域，而影响用户体验
          // 所以把行内元素利用display变成块级元素
          font-size: 14px
          color: rgb(77,85,93)
    .router-link-active
        color:rgb(240,20,20)
</style>
