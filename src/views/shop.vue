<template lang="pug">
  .shop
    .title
      h1 Shop
    vs-table(:data="items", pagination, search, max-items="5")
      template(slot="header")
        h3 Items
      template(slot="thead")
        vs-th Item
        vs-th Price
      template(slot-scope="{data}")
        vs-tr(:key="index", v-for="(tr, index) in data")
          vs-td(:data="data[index].name")
            vs-chip(color="primary")
              vs-avatar(size="medium", :src="require(`../assets/img/${data[index].type}/${data[index].image}`)", badge="1")
              span {{ data[index].name }}
          vs-td
            vs-chip(color="warning")
              vs-avatar(icon="attach_money")
              span {{ data[index].gold | number }}
          template(slot="expand")
            vs-row(vs-justify='center')
              vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='6')
                game-item
</template>

<script>
import GameItem from '../components/item'

export default {
  components: {
    'game-item': GameItem
  },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.items = new Array(20).fill({ id: 1, name: 'Capa de Invisibilidad', type: 'armor', image: 'example.png', gold: 99999 })
      this.$vs.loading.close()
    }, 2000)
  }
}
</script>

<style lang='stylus' scoped>
  .shop
    padding 10px
    /deep/ .vs-table--tbody-table
      min-width 0px
      .td.vs-table--td span
        display flex
        justify-content flex-start
        align-items center
</style>
