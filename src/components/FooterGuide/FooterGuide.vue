<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{on:$route.path==='/msite'}" @click="goTo('/msite')">
      <span>
        <i class="iconfont iconu"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide-item" :class="{on:$route.path==='/search'}" @click="goTo('/search')">
      <span>
        <i class="iconfont iconsousuo"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on:$route.path==='/order'}" @click="goTo('/order')">
      <span>
        <i class="iconfont iconbangong"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide-item" :class="{on:$route.path==='/profile'}" @click="goTo('/profile')">
      <span>
        <i class="iconfont iconwode"></i>
      </span>
      <span>个人</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"FooterGuide",
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

@import "../../common/stylus/mixins.styl"

.footer-guide
  top-border-1px(red)
  font-size 15px
  display flex
  position fixed
  width 100%
  height 50px
  left 0
  bottom 0
  .guide-item
    padding-top 7px
    display flex
    flex-direction column
    text-align center
    width 25%
    &.on
      color $green
    i 
      font-size 16px
 
</style>
