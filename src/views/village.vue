<template lang="pug">
  div.village
    .title
      h1 Village
    vs-row(vs-align="center", vs-justify="flex-start")
      vs-col(vs-lg="3", vs-sm="4", vs-xs="6", v-for="(building, index) in buildings", :key="index")
        .slot(@click="select(building.id)")
          vs-avatar(size="100px", :src="require(`../assets/img/armor/example.png`)", badge="999")
          vs-chip(:color="building.rarity") {{ building.name }}
</template>

<script>
export default {
  data () {
    return {
      buildings: []
    }
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.buildings = new Array(10).fill({ id: 3, name: 'Edificio', type: 'armor', image: 'example.png', rarity: 'primary' })
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
  .village
    height 100%
    width 100%
    /*
    background url('https://cdna.artstation.com/p/assets/images/images/001/233/444/large/_-understroke-pirate-bg-222.jpg?1551282874') no-repeat center center fixed
    -webkit-background-size cover
    -moz-background-size cover
    -o-background-size cover
    background-size cover
    */
    padding 10px
    .vs-row
      margin-bottom 20px
    .slot
      display flex
      justify-content center
      align-items center
      flex-direction column
</style>
