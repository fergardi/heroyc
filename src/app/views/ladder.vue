<template lang="pug">
  // VIEW
  .ladder
    // TITLE
    .title
      h1 Ladder
    // TABLE
    vs-table(:data="players", pagination, search, stripe, max-items="5")
      template(slot="header")
        h3 Search
      template(slot="thead")
        vs-th Position
        vs-th(sort-key="name") Name
        vs-th(sort-key="power") Power
      template(slot-scope="{data}")
        vs-tr(v-for="(tr, index) in data", :key="index")
          vs-td(:data="index") {{ index }}
          vs-td(:data="tr.name") {{ tr.name }}
          vs-td {{ tr.power | number }}
</template>

<script>
export default {
  data () {
    return {
      players: []
    }
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.players = [
        { id: 1, name: 'XXX', power: 99999 },
        { id: 2, name: 'XXX', power: 99999 }
      ]
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
