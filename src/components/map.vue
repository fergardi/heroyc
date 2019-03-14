<template lang="pug">
  .map
    map-box#map(:access-token="token", :map-style="style", :bearing="bearing", :pitch="pitch", :zoom="zoom", :attribution-control="false", :center="center", @click="click", @load="load")
      map-marker(v-for="(marker, index) in markers", :key="index", :coordinates="marker.coordinates", :id="marker.id")
        div.wrapper(slot="marker")
          component(:is="marker.type")
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglMarker } from 'vue-mapbox'
import db from '../services/firebase'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: 'world-map',
  components: {
    'map-box': MglMap,
    'map-marker': MglMarker,
    'marker-shop': () => import('./markers/shop'),
    'marker-dungeon': () => import('./markers/dungeon'),
    'marker-tavern': () => import('./markers/tavern'),
    'marker-village': () => import('./markers/village'),
    'marker-player': () => import('./markers/player')
  },
  data () {
    return {
      map: null,
      token: 'pk.eyJ1IjoiZmVyZ2FyZGkiLCJhIjoiY2lxdWl1enJiMDAzaWh4bTNwY3F6MnNwdiJ9.fPkJoOfrARPtZWCj1ehyCQ',
      zoom: 12,
      bearing: 0,
      pitch: 60,
      center: [-5.5795430999999995, 42.5821452],
      // style: 'mapbox://styles/fergardi/cirymo82r004jgym6lh1lkgo5',
      style: 'mapbox://styles/fergardi/cj85kacqg1rop2roah2vex96n',
      markers: []
    }
  },
  created () {
    this.mapbox = Mapbox
  },
  mounted () {
    this.$vs.loading({ type: 'radius', text: 'Loading...' })
    setTimeout(() => {
      this.markers = this.markers.concat(new Array(1).fill({ type: 'marker-shop', coordinates: [-5.575772745253971, 42.59257178934649] }))
      this.markers = this.markers.concat(new Array(1).fill({ type: 'marker-dungeon', coordinates: [-5.574666885953036, 42.66354267483237] }))
      this.markers = this.markers.concat(new Array(1).fill({ type: 'marker-village', coordinates: [-5.596917721920249, 42.581961827553755] }))
      this.markers = this.markers.concat(new Array(1).fill({ type: 'marker-tavern', coordinates: [-5.57605099064881, 42.63478961599586] }))
      this.markers = this.markers.concat(new Array(1).fill({ type: 'marker-player', coordinates: [-5.5795430999999995, 42.5821452] }))
      this.$vs.loading.close()
    }, 2000)
    db.ref('places').on('child_added', (place) => {
      // TODO
    })
  },
  methods: {
    click (e) {
      console.log(e)
    },
    load (e) {
      this.map = e.map
      this.rotateCamera(0)
    },
    rotateCamera (timestamp) {
      this.map.rotateTo((timestamp / 100) % 360, { duration: 0 })
      requestAnimationFrame(this.rotateCamera)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .map
    #map
      width 100vw
      height calc(100vh - 70px)
      /deep/ .con-vs-chip
        margin 0 !important
</style>
