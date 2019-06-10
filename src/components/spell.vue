<template lang="pug">
  .spell
    vs-card(actionable, :class="info.color")
      div(slot="header")
        h4 {{ info.name }}
      div(slot="media")
        img(src="https://lusaxweb.github.io/vuesax/card.png")
      div
        span Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      div.extra(slot="extra-content", v-if="extra")
        vs-chip(color="warning")
          vs-avatar(icon="attach_money")
          span {{ info.gold | number }}
        vs-chip(color="primary")
          vs-avatar(icon="star")
          span {{ info.experience | number }}
      div(slot="footer")
        vs-row(vs-justify="flex-end")
          vs-button(color="success", icon="check", @click="select")
          vs-button(color="danger", icon="close")
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
      this.$emit('research-spell-selected')
    }
  },
  computed: {
    extra () {
      return this.info.experience || this.info.level
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
      &.darkness
        .vs-card--header
          background-color red
          color #fff
</style>
