<template lang="pug">
  div.tavern
    vs-row(vs-justify='center')
      vs-col(type='flex', vs-justify='center', vs-align='center', vs-w='6')
        map-quest
      vs-col(type='flex', vs-justify='center', vs-align='center', vs-w='6')
        map-quest
</template>

<script>
import MapQuest from '../components/quest'

export default {
  components: {
    'map-quest': MapQuest
  }
}
</script>

<style lang="stylus" scoped>
  .tavern
    padding 5px
</style>
