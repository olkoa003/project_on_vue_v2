<template>
  <div id="app">
    <nav>
      <router-link to="/">Calculator</router-link> |
      <router-link to="/about">My Personal Costs Page</router-link> | 
      <router-link :to="{ name: 'AddPaymentForm', params: { section: 'payment', category: 'Food' }, query: {value: 200}}">Food Expense 1</router-link> | 
      <router-link :to="{ name: 'AddPaymentForm', params: { section: 'payment', category: 'Transport' }, query: {value: 50}}">Transport Expense 2</router-link> | 
      <router-link :to="{ name: 'AddPaymentForm', params: { section: 'payment', category: 'Entertainment' }, query: {value: 2000}}">Entertainment Expense 3</router-link> | 
    </nav>
    <router-view />
  </div>
</template>

<script>
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
