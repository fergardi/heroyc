<template lang="pug">
  .map
    map-box#map(:access-token="token", :map-options="options")
</template>

<script>
import Mapbox from 'mapbox-gl-vue'
import db from '../services/firebase'

export default {
  name: 'world-map',
  components: {
    'map-box': Mapbox
  },
  data () {
    return {
      token: 'pk.eyJ1IjoiZmVyZ2FyZGkiLCJhIjoiY2lxdWl1enJiMDAzaWh4bTNwY3F6MnNwdiJ9.fPkJoOfrARPtZWCj1ehyCQ',
      options: {
        zoom: 12,
        bearing: 0,
        pitch: 60,
        center: [-5.5795430999999995, 42.5821452],
        // style: 'mapbox://styles/fergardi/cirymo82r004jgym6lh1lkgo5',
        style: 'mapbox://styles/fergardi/cj85kacqg1rop2roah2vex96n',
        position: 'bottom-left',
        range: 1000,
        speed: 1,
        curve: 1,
        interactive: true,
        attributionControl: false
      }
    }
  },
  mounted () {
    db.ref('places').on('child_added', (place) => {
    })
  }
}
</script>

<style lang="stylus">
  .map
    #map
      width 100vw
      height 100vh
</style>
