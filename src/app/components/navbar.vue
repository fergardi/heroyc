<template lang="pug">
  .navbar
    vs-navbar.nabarx(v-model="active", type="color")
      div(slot='title')
        vs-navbar-title {{ title }}
      vs-navbar-item(v-for="(route, index) in routes", :index="index", :key="index")
        router-link(tag="a" :to="route.path") {{ route.name }}
</template>

<script>
import router from '@/router/router'

export default {
  name: 'nav-bar',
  data () {
    return {
      active: 0
    }
  },
  computed: {
    routes () {
      return router.options.routes.filter(route => route.navbar)
    },
    title () {
      return this.routes[this.active].name
    }
  }
}
</script>

<style lang="stylus" scoped>
  .navbar
    z-index 9999
    position absolute
    top 0
    right 0
    left 0
    background white
    box-shadow 0 -4px 25px 0 rgba(0, 0, 0, .1)
    /deep/ .con-ul-tabs .vs-tabs--li button
      display flex
      align-items center
      flex-wrap wrap
      justify-content center
      flex-direction column
    /deep/ .con-ul-tabs .vs-tabs--li button i
      padding 2px !important
    /deep/ .vs-tabs--content
      padding 0 !important
      margin-bottom 10px
</style>
