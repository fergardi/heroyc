<template lang="pug">
  div.tavern
    .title
      h1 Tavern
    vs-row(vs-align="center", vs-justify="flex-start")
      vs-col(vs-lg="3", vs-sm="4", vs-xs="6", v-for="(quest, index) in quests", :key="index")
        map-quest(:info="quest", @tavern-quest-selected="select(quest.id)")
</template>

<script>
import MapQuest from '@/components/quest'

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
      this.quests = new Array(10).fill({ id: 3, name: 'Quest', gold: 10, experience: 100 })
      this.$vs.loading.close()
    }, 2000)
  },
  methods: {
    select (id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'success',
        title: 'Dialog',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + id,
        accept: this.accept
      })
    },
    accept () {
      this.$vs.notify({
        color: 'success',
        title: 'Accept Selected',
        text: 'Lorem ipsum dolor sit amet, consectetur'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tavern
    padding 10px
</style>
