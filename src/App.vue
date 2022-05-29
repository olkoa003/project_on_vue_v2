<template>
  <div id="app">
    <nav>
      <router-link to="/">Calculator</router-link> |
      <router-link to="/about">My Personal Costs Page</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    goToAboutPage() {
      this.$router.push({
        name: "About",
      })
    }
  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
