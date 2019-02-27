<template lang="pug">
  #app

    vs-sidebar#sidebar(:reduce='reduce', :reduce-not-hover-expand='reduce', parent='#app', default-index='1', color='success', spacer='', v-model='sidebar')
      .header-sidebar(slot='header')
        vs-avatar(size='70px', src='https://randomuser.me/api/portraits/men/85.jpg')
      vs-sidebar-group(open='', title='Application')
        vs-sidebar-item(index='1', icon='menu', @click='reduce=!reduce') Toggle Sidebar
        vs-sidebar-item(index='5', icon='verified_user') Configurations
        vs-sidebar-group(title='Store')
          vs-sidebar-item(index='2.1', icon='store') Store
          vs-sidebar-item(index='2.2', icon='nature_people') Nature
          vs-sidebar-item(index='2.3', icon='style') Style
        vs-sidebar-item(index='2', icon='gavel') History
        vs-sidebar-item(index='3', icon='https') Security
        vs-sidebar-item(index='4', icon='help') Help
      vs-divider(icon='person', position='left') User
      vs-sidebar-item(index='6', icon='account_box') Profile
      .footer-sidebar(slot='footer')
        vs-button(icon='settings', color='primary', type='border')

    vs-button#toggler(color='primary', size='small', type='filled', icon='settings', @click.prevent.stop="sidebar=true")

    #content
      router-view
</template>

<script>
export default {
  data () {
    return {
      sidebar: false,
      reduce: true
    }
  }
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100')

  html
  body
  #app
    height 100vh
    width 100vw
    overflow hidden
    margin 0
    padding 0
    #toggler
      position absolute
      bottom 10px
      right 10px
      z-index 999
    #content
      height 100vh
      width 100vw
    h1, h2, h3, h4, h5, h6
      font-family 'Montserrat', sans-serif
</style>
