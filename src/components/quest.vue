<template lang="pug">
  div.quest
    vs-card(actionable)
      div(slot="header")
        h3 {{ info.name }}
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
  name: 'map-quest',
  props: {
    info: {
      type: Object,
      required: true,
      default: () => {
        return {
          name: null,
          gold: null,
          experience: null
        }
      }
    }
  },
  methods: {
    select () {
      this.$emit('tavern-quest-selected')
    }
  },
  computed: {
    extra () {
      return this.info.gold || this.info.experience
    }
  }
}
</script>

<style lang="stylus" scoped>
  .quest
    margin 5px
    .extra
      display flex
      justify-content center
      flex-wrap wrap
</style>
