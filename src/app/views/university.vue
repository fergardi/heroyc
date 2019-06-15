<template lang="pug">
  // VIEW
  .university
    // TITLE
    .title
      h1 University
    // SPELLS
    vs-row(vs-align="center", vs-justify="flex-start")
      vs-col(vs-lg="3", vs-sm="4", vs-xs="6", v-for="(spell, index) in spells", :key="index")
        magic-spell(:info="spell", @university-spell-selected="showResearchDialog(spell.id)")
    // PROMPT
    vs-prompt(@vs-cancel="resetDialogs", @vs-close="resetDialogs", @vs-accept="researchSpell", :vs-active.sync="researchDialog", vs-title="Dialog")
      span Turns
      vs-input-number(v-model="turns", icon-inc="expand_less", icon-dec="expand_more", label="Turns:")
</template>

<script>
import MagicSpell from '@/app/components/spell'

export default {
  components: {
    'magic-spell': MagicSpell
  },
  data () {
    return {
      spells: [],
      researchDialog: false,
      selectedSpell: null,
      turns: 0
    }
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.spells = [
        { name: 'spell.fire.fireball.name', description: 'spell.fire.fireball.description', image: 'img_spell_fireball', color: 'fire', level: 1, completed: false, turns: 300, researched: 30 },
        { name: 'spell.fire.firewall.name', description: 'spell.fire.fireball.description', image: 'img_spell_fire_circle', color: 'fire', level: 1, completed: false, turns: 300, researched: 30 }
      ]
      this.$vs.loading.close()
    }, 2000)
  },
  methods: {
    showResearchDialog (id) {
      this.selectedSpell = id
      this.researchDialog = true
      this.turns = 0
    },
    researchSpell () {
      // TODO
    },
    resetDialogs () {
      this.turns = 0
      this.researchDialog = false
      this.selectedSpell = null
    }
  }
}
</script>

<style lang="stylus" scoped>
  .university
    padding 10px
</style>
