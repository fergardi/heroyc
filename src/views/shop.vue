<template lang="pug">
  .shop
    .title Shop
    vs-table(:data="users", pagination, search)
      template(slot="header")
        h3 Users
      template(slot="thead")
        vs-th Icon
        vs-th Email
        vs-th Name
        vs-th Website
        vs-th Nro
      template(slot-scope="{data}")
        vs-tr(:key="indextr", v-for="(tr, indextr) in data")
          vs-td(:data="data[indextr].email")
            vs-avatar(size="50px", :src="require('../assets/img/armor/example.png')")
          vs-td(:data="data[indextr].email") {{data[indextr].email}}
          vs-td(:data="data[indextr].username") {{data[indextr].name}}
          vs-td(:data="data[indextr].id") {{data[indextr].id}}
          vs-td(:data="data[indextr].id") {{data[indextr].website}}
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          website: 'hildegard.org'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          website: 'anastasia.net'
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          website: 'ramiro.info'
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          website: 'kale.biz'
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          website: 'demarco.info'
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery',
          email: 'Karley_Dach@jasper.info',
          website: 'ola.org'
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles',
          email: 'Telly.Hoeger@billy.biz',
          website: 'elvis.io'
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          email: 'Sherwood@rosamond.me',
          website: 'jacynthe.com'
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io',
          website: 'conrad.com'
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton',
          email: 'Rey.Padberg@karina.biz',
          website: 'ambrose.net'
        }
      ]
    }
  },
  methods: {
    image () {
      require('../assets/img/armor/example.png')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .shop
    padding 10px
    .title
      background url('../assets/img/gui/title.png')
      background-position center
      background-repeat no-repeat
      background-size contain
      height 100px
      display flex
      justify-content center
      align-items center
      color #fff
    /deep/ .tr-values
      background url('../assets/img/gui/row.png')
      background-position center
      background-repeat no-repeat
      background-size cover
</style>
