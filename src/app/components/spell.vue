<template lang="pug">
  .spell
    vs-card(actionable, :class="info.color")
      div(slot="header")
        h4 {{ info.name }}
      div(slot="media")
        img(:src="info.image")
      div
        span Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        vs-progress(:percent="info.researched * 100 / info.turns", color="primary")
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
  name: 'magic-spell',
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
      this.$emit('university-spell-selected')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .spell
    margin 5px
    .extra
      display flex
      justify-content center
      flex-wrap wrap
    /deep/ .con-vs-card
      &.wind
        background-color var(--wind)
        color #000
      &.fire
        background-color var(--fire)
        color #fff
      &.earth
        background-color var(--earth)
        color #fff
      &.lightning
        background-color var(--lightning)
        color #fff
      &.water
        background-color var(--water)
        color #fff
</style>
