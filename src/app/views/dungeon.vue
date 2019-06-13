<template lang="pug">
  .dungeon
    .title
      h1 Dungeon
</template>

<script>
export default {
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.$vs.loading.close()
    }, 2000)
  }
}
</script>

<style lang='stylus' scoped>
  .dungeon
    padding 10px
</style>
