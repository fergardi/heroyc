<template lang="pug">
  #app
    #navbar
      nav-bar
    #sidebar
      side-bar
    #content
      transition(appear, mode="in-out", appear-active-class="animated fadeIn", enter-active-class="animated fadeIn", leave-active-class="animated fadeOut")
        router-view
</template>

<script>
import NavBar from './components/navbar'
import SideBar from './components/sidebar'

export default {
  components: {
    'side-bar': SideBar,
    'nav-bar': NavBar
  },
  data () {
    return {
      sidebar: true
    }
  }
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100|Open+Sans')
  html
  body
  #app
    height 100vh
    width 100vw
    overflow hidden
    margin 0
    padding 0
    font-family 'Open Sans', sans-serif
    h1, h2, h3, h4, h5, h6
      font-family 'Montserrat', sans-serif
    .vs-button.includeIconOnly
      .vs-icon
        line-height 0.8
    .title
      padding 20px
    #content
      overflow-x hidden
      overflow-y auto
      height 100vh // no topbar
      margin-top 0 // no topbar
      width calc(100vw - 260px) // sidebar
      margin-left 260px
    #sidebar
      display block
    #navbar
      display none
    // media queries
    @media screen and (max-width: 600px)
      #content
        height calc(100vh - 38px) // navbar
        margin-top 38px // navbar
        width 100vw // no sidebar
        margin-left 0
    @media screen and (max-width: 600px)
      #sidebar
        display none
      #navbar
        display block
</style>
