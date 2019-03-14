<template lang="pug">
  .navbar
    vs-tabs(color="primary", vs-alignment="fixed")
      vs-tab(vs-label="World", vs-icon="pets", @click="goTo('world')")
      vs-tab(vs-label="Character", vs-icon="account_balance", @click="goTo('character')")
      vs-tab(vs-label="Tavern", vs-icon="dashboard", @click="goTo('tavern')")
</template>

<script>
export default {
  name: 'nav-bar',
  methods: {
    goTo (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .navbar
    z-index 9999
    height 70px
    position absolute
    bottom 0
    right 0
    left 0
    background white
    box-shadow 0 -4px 25px 0 rgba(0,0,0,.1)
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
