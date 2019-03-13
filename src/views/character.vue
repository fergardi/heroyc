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
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .character
    padding 10px
    .vs-row
      margin-bottom 20px
</style>
