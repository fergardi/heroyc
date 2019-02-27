<template lang="pug">
  .sidebar
    vs-sidebar#sidebar(:reduce="reduce", :reduce-not-hover-expand="!reduce", parent="#app", default-index="1", color="primary", spacer, v-model="opened")
      .header-sidebar(slot="header")
        vs-avatar(size="70px", src="https://randomuser.me/api/portraits/men/85.jpg")
        h4
          span Fergardi
      vs-divider Hola
      vs-sidebar-item(index="1", to="/world", icon="public", @click="opened=false") World
      vs-sidebar-item(index="2", to="/character", icon="face", @click="opened=false") Character
      vs-sidebar-item(index="3", to="/tavern", icon="home", @click="opened=false") Tavern
      vs-sidebar-item(index="4", to="/shop", icon="shopping_cart", @click="opened=false") Shop
</template>

<script>
export default {
  name: 'side-bar',
  props: {
    sidebar: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      reduce: false
    }
  },
  computed: {
    opened: {
      get () {
        return this.sidebar
      },
      set (value) {
        this.$emit('update:sidebar', value)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  #sidebar
    .vs-divider
      background url('../assets/img/gui/subtitle.png')
      background-position center
      background-repeat no-repeat
      background-size contain
      height 60px
      /deep/ .vs-divider--text
        background transparent
        color #fff !important
</style>
