<template lang="pug">
  div.research
    .title
      h1 Research
    vs-row(vs-align="center", vs-justify="flex-start")
      vs-col(vs-lg="3", vs-sm="4", vs-xs="6", v-for="(research, index) in researches", :key="index")
        .slot(@click="select(research.id)")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
          vs-chip(:color="research.rarity") {{ research.name }}
</template>

<script>
export default {
  data () {
    return {
      researches: []
    }
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.researches = new Array(10).fill({ id: 3, name: 'Hechizo', type: 'armor', image: 'example.png', rarity: 'primary' })
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
    padding 10px
    .vs-row
      margin-bottom 20px
    .slot
      display flex
      justify-content center
      align-items center
      flex-direction column
</style>
