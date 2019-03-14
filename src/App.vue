<template lang="pug">
  #app
    #content
      router-view
    nav-bar
</template>

<script>
import NavBar from './components/navbar'

export default {
  components: {
    'nav-bar': NavBar
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
    #content
      height calc(100vh - 70px) // minus bottom navbar
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
