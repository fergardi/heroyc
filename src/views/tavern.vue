<template lang="pug">
  div.tavern
    .title
      h1 Tavern
    vs-row(vs-justify='center')
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='6', v-for="(quest, index) in quests", :key="index")
        map-quest(:info="quest")
</template>

<script>
import MapQuest from '../components/quest'

export default {
  components: {
    'map-quest': MapQuest
  },
  data () {
    return {
      quests: []
    }
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.quests = new Array(4).fill({ name: 'Quest', gold: 10, experience: 100 })
      this.$vs.loading.close()
    }, 2000)
  }
}
</script>

<style lang="stylus" scoped>
  .tavern
    padding 5px
</style>
