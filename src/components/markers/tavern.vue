<template lang="pug">
  .marker-tavern
    map-marker(:coordinates="data.coordinates", :id="data.id")
      map-popup(:closeButton="false", :showed="false")
        vs-card
          div(slot='header')
            h3 Hello world !
          div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          div(slot='footer')
            vs-row(vs-justify='flex-end')
              vs-button(type='gradient', color='danger', icon='favorite')
      div.wrapper(slot="marker")
        vs-chip(color="warning")
          vs-avatar(:src="require(`../../assets/img/armor/example.png`)", badge="1")
          span Tavern
</template>

<script>
import { MglMarker, MglPopup } from 'vue-mapbox'

export default {
  name: 'marker-tavern',
  components: {
    'map-marker': MglMarker,
    'map-popup': MglPopup
  },
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
