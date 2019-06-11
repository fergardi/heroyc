<template lang="pug">
  // VIEW
  .ladder
    // TITLE
    .title
      h1 Ladder
    // TABLE
    vs-table(:data="players", pagination, search, max-items="5")
      template(slot="header")
        h3 Search
      template(slot="thead")
        vs-th Name
        vs-th Power
      template(slot-scope="{data}")
        vs-tr(v-for="(tr, index) in data", :key="index")
          vs-td(:data="tr.name")
            vs-chip(color="primary")
              vs-avatar(icon-pack="ra", icon="ra-sword")
              span {{ tr.name }}
          vs-td
            vs-chip(color="warning")
              vs-avatar(icon-pack="ra", icon="ra-sword")
              span {{ tr.power | number }}
</template>

<script>
export default {
  data () {
    return {
      players: []
    }
  },
  created () {
    this.players = JSON.parse(JSON.stringify(new Array(20).fill({ id: 1, name: 'XXX', power: Math.random() * 99999 })))
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.players = JSON.parse(JSON.stringify(new Array(20).fill({ id: 1, name: 'XXX', power: Math.random() * 99999 })))
      this.$vs.loading.close()
    }, 2000)
  }
}
</script>

<style lang='stylus' scoped>
  .ladder
    padding 10px
    /deep/ .vs-table--tbody-table
      min-width 0px
      .td.vs-table--td span
        display flex
        justify-content flex-start
        align-items center
</style>
