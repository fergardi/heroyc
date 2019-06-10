<template lang="pug">
  div.research
    .title
      h1 Research
    vs-row(vs-align="center", vs-justify="flex-start")
      vs-col(vs-lg="3", vs-sm="4", vs-xs="6", v-for="(research, index) in researches", :key="index")
        magic-spell(:info="research", @research-spell-selected="select(research.id)")
</template>

<script>
import MagicSpell from '../components/spell'

export default {
  components: {
    'magic-spell': MagicSpell
  },
  data () {
    return {
      researches: []
    }
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.researches = new Array(2).fill({ id: 3, name: 'Hechizo', type: 'armor', image: 'example.png', color: 'darkness' })
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
  .research
    padding 5px
</style>
