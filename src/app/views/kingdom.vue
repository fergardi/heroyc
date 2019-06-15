<template lang="pug">
  // VIEW
  .kingdom
    // TITLE
    .title
      h1 Kingdom
    // BUILDINGS
    vs-row(vs-align="center", vs-justify="flex-start")
      vs-col(vs-lg="3", vs-sm="4", vs-xs="6", v-for="(building, index) in buildings", :key="index")
        kingdom-building(:info="building", @kingdom-building-selected="showConstructDialog(building.id)")
    // PROMPT
    vs-prompt(@vs-cancel="resetDialogs", @vs-close="resetDialogs", @vs-accept="constructBuilding", :vs-active.sync="constructDialog", vs-title="Dialog")
      span Turns
      vs-input-number(v-model="turns", icon-inc="expand_less", icon-dec="expand_more", label="Turns:")
</template>

<script>
import KingdomBuilding from '@/components/building'

export default {
  components: {
    'kingdom-building': KingdomBuilding
  },
  data () {
    return {
      buildings: [],
      constructDialog: false,
      selectedBuilding: null,
      turns: 0
    }
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.buildings = [
        { id: 0, name: 'building.terrain.name', description: 'building.terrain.description', image: 'img_building_terrain', quantity: 99999 },
        { id: 1, name: 'building.farm.name', description: 'building.farm.description', image: 'img_building_farm', quantity: 99999 },
        { id: 2, name: 'building.village.name', description: 'building.village.description', image: 'img_building_village', quantity: 99999 },
        { id: 3, name: 'building.node.name', description: 'building.node.description', image: 'img_building_node', quantity: 99999 },
        { id: 4, name: 'building.barrack.name', description: 'building.barrack.description', image: 'img_building_barrack', quantity: 99999 },
        { id: 5, name: 'building.guild.name', description: 'building.guild.description', image: 'img_building_guild', quantity: 99999 },
        { id: 6, name: 'building.workshop.name', description: 'building.workshop.description', image: 'img_building_workshop', quantity: 99999 },
        { id: 7, name: 'building.barrier.name', description: 'building.barrier.description', image: 'img_building_barrier', quantity: 99999 },
        { id: 8, name: 'building.fortress.name', description: 'building.fortress.description', image: 'img_building_fortress', quantity: 99999 },
        { id: 9, name: 'building.temple.name', description: 'building.temple.description', image: 'img_building_temple', quantity: 99999 }
      ]
      this.$vs.loading.close()
    }, 2000)
  },
  methods: {
    showConstructDialog (id) {
      this.selectedBuilding = id
      this.constructDialog = true
      this.turns = 0
    },
    resetDialogs () {
      this.selectedBuilding = null
      this.constructDialog = false
      this.turns = 0
    },
    constructBuilding () {
      // TODO
    }
  }
}
</script>

<style lang="stylus" scoped>
  .kingdom
    padding 10px
    background url('') no-repeat center center fixed
    background-size cover
</style>
