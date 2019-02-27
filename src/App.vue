<template lang="pug">
  #app

    vs-sidebar#sidebar(:reduce="reduce", :reduce-not-hover-expand="!reduce", parent="#app", default-index="1", color="primary", spacer, v-model="sidebar")
      .header-sidebar(slot="header")
        vs-avatar(size="70px", src="https://randomuser.me/api/portraits/men/85.jpg")
        h4
          span Fergardi
      vs-divider(icon="person", position="left")
      vs-sidebar-item(index="1", to="/world", icon="public", @click="sidebar=false") World
      vs-sidebar-item(index="2", to="/character", icon="face", @click="sidebar=false") Character
      vs-sidebar-item(index="3", to="/tavern", icon="home", @click="sidebar=false") Tavern

    vs-button#toggler(color="primary", size="small", type="filled", icon="settings", @click.prevent.stop="sidebar=true")

    #content
      router-view
</template>

<script>
export default {
  data () {
    return {
      sidebar: false,
      reduce: true
    }
  }
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100')

  html
  body
  #app
    height 100vh
    width 100vw
    overflow hidden
    margin 0
    padding 0
    #toggler
      position absolute
      bottom 10px
      left 10px
      z-index 999
    #content
      height 100vh
      width 100vw
    h1, h2, h3, h4, h5, h6
      font-family 'Montserrat', sans-serif
</style>
