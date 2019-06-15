<template lang="pug">
  .map
    map-box#map(:access-token="token", :map-style="style", :bearing="bearing", :pitch="pitch", :zoom="zoom", :attribution-control="false", :center="center", @click="click", @load="load")
      component(v-for="(marker, index) in markers", :key="index", :is="marker.type", :data="marker")
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap } from 'vue-mapbox'
import db from '@/database/firebase'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: 'world-map',
  components: {
    'map-box': MglMap,
    'marker-shop': () => import('@/app/markers/shop'),
    'marker-dungeon': () => import('@/app/markers/dungeon'),
    'marker-tavern': () => import('@/app/markers/tavern'),
    'marker-village': () => import('@/app/markers/village'),
    'marker-player': () => import('@/app/markers/player')
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
      /*
      this.markers = this.markers.concat([...Array(1)].map((index) => { return { id: index, type: 'marker-shop', coordinates: this.random() } }))
      this.markers = this.markers.concat([...Array(1)].map((index) => { return { id: index, type: 'marker-tavern', coordinates: this.random() } }))
      this.markers = this.markers.concat([...Array(1)].map((index) => { return { id: index, type: 'marker-dungeon', coordinates: this.random() } }))
      this.markers = this.markers.concat([...Array(1)].map((index) => { return { id: index, type: 'marker-village', coordinates: this.random() } }))
      */
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
      // this.rotateCamera(0)
      // this.drawRadius()
    },
    rotateCamera (timestamp) {
      this.map.rotateTo((timestamp / 100) % 360, { duration: 0 })
      requestAnimationFrame(this.rotateCamera)
    },
    random () {
      let minLat = 42.62
      let maxLat = 42.61
      let minLng = -5.58
      let maxLng = -5.57
      let lat = Math.random() * (maxLat - minLat) + minLat
      let lng = Math.random() * (maxLng - minLng) + minLng
      let coordinates = [lng, lat]
      return coordinates
    },
    createRadius (center, radiusInKm, points) {
      if (!points) points = 128
      let coords = {
        latitude: center[1],
        longitude: center[0]
      }
      let km = radiusInKm
      let ret = []
      let distanceX = km / (111.320 * Math.cos(coords.latitude * Math.PI / 180))
      let distanceY = km / 110.574
      let theta, x, y
      for (let i = 0; i < points; i++) {
        theta = (i / points) * (2 * Math.PI)
        x = distanceX * Math.cos(theta)
        y = distanceY * Math.sin(theta)
        ret.push([coords.longitude + x, coords.latitude + y])
      }
      ret.push(ret[0])
      return {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': [ret]
            }
          }]
        }
      }
    },
    drawRadius () {
      this.map.addSource('polygon', this.createRadius(this.center, 5))
      this.map.addLayer({
        'id': 'polygon',
        'type': 'fill',
        'source': 'polygon',
        'layout': {},
        'paint': {
          'fill-color': '#fff',
          'fill-opacity': 0.8
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .map
    #map
      width 100vw
      // height 100vh
      height calc(100vh - 38px)
      /deep/ .con-vs-chip
        margin 0 !important
        box-shadow 0 4px 25px 0 rgba(0,0,0,.1)
      /deep/ .con-vs-chip .con-vs-avatar
        width 36px
        height 36px
      /deep/ .mapboxgl-popup-tip
        visibility hidden
        margin 5px
      /deep/ .mapboxgl-popup-content
        max-width 250px
        position relative
        background transparent
        padding 0
        box-shadow none
  /*
    @media screen and (max-width: 600px)
      #map
        height calc(100vh - 38px)
  */
</style>
