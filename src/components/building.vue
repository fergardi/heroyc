<template lang="pug">
  .building
    vs-card(actionable)
      div(slot="header")
        h4 {{ info.name | t }}
      div(slot="media")
        img(:src="require(`@/assets/img/buildings/${info.image}.jpg`)")
      div
        span {{ info.description | t }}
      div.extra(slot="extra-content")
        vs-chip(color="warning")
          vs-avatar(icon="attach_money")
          span bla
        vs-chip(color="primary")
          vs-avatar(icon="star")
          span bla
      div(slot="footer")
        vs-row(vs-justify="flex-end")
          vs-button(color="success", icon-pack="ra ra-fw ra-2x", icon="ra-fairy-wand", @click="select")
          vs-button(color="danger", icon-pack="ra ra-fw ra-2x", icon="ra-fizzing-flask")
</template>

<script>
export default {
  name: 'kingdom-building',
  props: {
    info: {
      type: Object,
      required: true,
      default: () => {
        return {
          name: null,
          color: null,
          experience: null,
          level: null,
          image: null
        }
      }
    }
  },
  methods: {
    select () {
      this.$emit('kingdom-building-selected')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .building
    margin 5px
    .extra
      display flex
      justify-content center
      flex-wrap wrap
</style>
