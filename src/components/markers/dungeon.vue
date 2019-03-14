<template lang="pug">
  .marker-dungeon
    vs-chip(color="warning")
      vs-avatar(:src="require(`../../assets/img/armor/example.png`)", badge="1")
      span Dungeon
</template>

<script>
export default {
  name: 'marker-dungeon'
}
</script>

<style lang="stylus" scoped>
</style>
