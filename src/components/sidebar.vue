<template lang="pug">
  .sidebar
    vs-sidebar#sidebar(parent="#sidebar", default-index="0", hidden-background, color="primary", spacer, v-model="opened")
      .header-sidebar(slot="header")
        vs-avatar(size="70px", src="https://randomuser.me/api/portraits/men/85.jpg", badge="1")
        h4
          span Fergardi
      vs-divider Hola
      vs-sidebar-item(v-for="(route, index) in routes", :key="route.index", :index="index", :to="route.path", :icon="route.icon") {{ route.name }}
</template>

<script>
import router from '@/services/router'

export default {
  name: 'side-bar',
  data () {
    return {
      opened: true
    }
  },
  computed: {
    routes () {
      return router.options.routes.filter(route => route.sidebar)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .sidebar
    /deep/ .vs-content-sidebar
      .header-sidebar
        display flex
        justify-content center
</style>
