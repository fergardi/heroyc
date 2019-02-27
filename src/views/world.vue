<template lang="pug">
  .world
    world-map
</template>

<script>
import map from '../components/map'

export default {
  name: 'world',
  components: {
    'world-map': map
  }
}
</script>

<style lang="stylus" scoped>
</style>
