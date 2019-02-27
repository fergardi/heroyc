<template lang="pug">
  div.quest(@click="select")
    vs-card(actionable)
      div(slot='header')
        h3 Quest 1
      div(slot='media')
        img(src="https://lusaxweb.github.io/vuesax/card.png")
      div
        span Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        vs-progress(:percent='100', color='primary') primary
        vs-progress(:percent='90', color='warning') warning
        vs-progress(:percent='75', color='danger') danger
        vs-progress(:percent='60', color='success') success
        vs-progress(:percent='45', color='dark') dark
        vs-progress(:percent='30', color='rgb(164, 69, 15)') RGB
        vs-progress(:percent='15', color='#24c1a0') HEX
      div(slot='footer')
        vs-row(vs-justify='flex-end')
          vs-button(type='gradient', color='danger', icon='favorite')
          vs-button(color='primary', icon='turned_in_not')
          vs-button(color='rgb(230,230,230)', color-text='rgb(50,50,50)', icon='settings')
</template>

<script>
export default {
  name: 'map-quest',
  methods: {
    select () {
      this.$vs.dialog({
        color: 'success',
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
  .quest
    margin 5px
</style>
