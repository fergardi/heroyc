<template lang="pug">
  div.item
    vs-card(actionable)
      div(slot="header")
        h3 Item 1
      div(slot="media")
        img(:src="require(`@/assets/img/armor/example.png`)")
      div
        span Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        vs-progress(:percent="100", color="primary") primary
        vs-progress(:percent="90", color="warning") warning
        vs-progress(:percent="75", color="danger") danger
        vs-progress(:percent="60", color="success") success
        vs-progress(:percent="45", color="dark") dark
      div(slot="footer")
        vs-row(vs-justify="flex-end")
          vs-button(color="success", icon="attach_money", @click="select")
</template>

<script>
export default {
  name: 'game-item',
  methods: {
    select () {
      this.$vs.dialog({
        color: 'success',
        type: 'confirm',
        title: 'Dialog',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept: this.accept
      })
    },
    accept () {
      this.$vs.notify({
        color: 'success',
        title: 'Accept Selected',
        text: 'Lorem ipsum dolor sit amet, consectetur'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item
    margin 5px
</style>
