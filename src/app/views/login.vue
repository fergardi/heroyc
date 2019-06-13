<template lang="pug">
  // VIEW
  .login
    // SPELLS
    vs-row(vs-align="center", vs-justify="center")
      vs-col(vs-lg="2", vs-sm="4", vs-xs="10")
        vs-card(actionable)
          div(slot="header")
            h3 Login
          div(slot="media")
            img(src="https://lusaxweb.github.io/vuesax/card.png")
          div
            vs-input(label="Name", placeholder="Placeholder", v-model="username")
            vs-input(type="password", label="Password", placeholder="Disabled", v-model="password")
          div(slot="footer")
            vs-row(vs-justify="flex-end")
              vs-button(color="success", icon="check")
              vs-button(color="danger", icon="close")
</template>

<script>
export default {
  data () {
    return {
      username: 'user@email.com',
      password: 'password'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login
    padding 10px
    /deep/ .vs-con-input-label
      width: 100%
</style>
