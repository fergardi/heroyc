<template lang="pug">
  div.character
    .title
      h1 Character
    vs-row(vs-justify='center')
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='4')
        vs-button(type="border")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='4')
        vs-button(type="border")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='4')
        vs-button(type="border")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
    vs-row(vs-justify='center')
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='4')
        vs-button(type="border")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='4')
        vs-button(type="border")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='4')
        vs-button(type="border")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
    vs-row(vs-justify='center')
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='4')
        vs-button(type="border")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='4')
        vs-button(type="border")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='4')
        vs-button(type="border")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
    .title
      h1 Staff
    vs-row
      vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-w='3', v-for="(item, index) in items", :key="index")
        .slot(@click="select(item.id)")
          vs-avatar(size="large", :src="require(`../assets/img/armor/example.png`)")
          vs-chip(:color="item.rarity") {{ item.name }}
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.items = new Array(10).fill({ id: 3, name: 'Capa de invisibilidad', type: 'armor', image: 'example.png', rarity: 'primary' })
      this.$vs.loading.close()
    }, 2000)
  },
  methods: {
    select (id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'success',
        title: 'Dialog',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + id,
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
  .character
    padding 10px
    .vs-row
      margin-bottom 20px
    .slot
      display flex
      justify-content center
      align-items center
      flex-direction column
</style>
