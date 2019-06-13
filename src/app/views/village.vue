<template lang="pug">
  // VIEW
  .village
    // TITLE
    .title
      h1 Village
    // BUILDINGS
    vs-row(vs-align="center", vs-justify="flex-start")
      vs-col(vs-lg="3", vs-sm="4", vs-xs="6", v-for="(building, index) in buildings", :key="index")
        village-building(:info="building", @village-building-selected="showConstructDialog(building.id)")
    // PROMPT
    vs-prompt(@vs-cancel="resetDialogs", @vs-close="resetDialogs", @vs-accept="constructBuilding", :vs-active.sync="constructDialog", vs-title="Dialog")
      span Turns
      vs-input-number(v-model="turns", icon-inc="expand_less", icon-dec="expand_more", label="Turns:")
</template>

<script>
import VillageBuilding from '@/components/building'

export default {
  components: {
    'village-building': VillageBuilding
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
        { id: 1, name: 'lbl_building_fire_fireball', image: 'https://pp.userapi.com/c638117/v638117348/22ece/6FjIKxpnUh0.jpg', color: 'fire', level: 1, completed: false, turns: 300, researched: 30 },
        { id: 2, name: 'lbl_building_fire_firewall', image: 'http://media.wizards.com/2017/images/daily/cardart_EMA_Pyroblast_Lg.jpg', color: 'fire', level: 1, completed: false, turns: 300, researched: 30 }
        /*
        { id: 3, name: 'Hechizo', color: 'earth' },
        { id: 3, name: 'Hechizo', color: 'lightning' },
        { id: 3, name: 'Hechizo', color: 'fire' },
        { id: 3, name: 'Hechizo', color: 'water' }
        */
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
    constructBuilding () {
      // TODO
    },
    resetDialogs () {
      this.turns = 0
      this.constructDialog = false
      this.selectedBuilding = null
    }
  }
}
</script>

<style lang="stylus" scoped>
  .village
    padding 10px
</style>
