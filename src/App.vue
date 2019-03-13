<template lang="pug">
  #app
    side-bar(:sidebar.sync="sidebar")
    vs-button#toggler(color="primary", size="small", type="filled", icon="settings", @click.prevent.stop="sidebar=true")
    #content
      router-view
</template>

<script>
import SideBar from './components/sidebar'

export default {
  components: {
    'side-bar': SideBar
  },
  data () {
    return {
      sidebar: false
    }
  }
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100|Open+Sans');

  html
  body
  #app
    height 100vh
    width 100vw
    overflow hidden
    margin 0
    padding 0
    font-family 'Open Sans', sans-serif
    #toggler
      position absolute
      bottom 10px
      left 10px
      z-index 999
    #content
      height 100vh
      width 100vw
      overflow-x hidden
      overflow-y auto
    h1, h2, h3, h4, h5, h6
      font-family 'Montserrat', sans-serif
    .vs-button.includeIconOnly
      .vs-icon
        line-height 0.8
    .title
      padding 20px
</style>
