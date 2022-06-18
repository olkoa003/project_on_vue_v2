<template>
  <v-app>
    <v-app-bar app flat color="primary white--text">
      <v-btn plain :ripple="false" white to="/">My Calculator</v-btn>
      <v-btn plain :ripple="false" to="/about">My Personal Costs</v-btn>
    </v-app-bar>
    <v-main>
      <transition name="fade">
        <ModalWindowAddPaymentForm :settings="settings" v-if="modalShow" />
      </transition>
      <transition name="fade">
        <ContextMenu />
      </transition>
      <router-view />
    </v-main>

    <v-footer color="primary" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Created on Vuetify By Oleg Kovalenko</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import ContextMenu from "./components/ContextMenu.vue";
export default {
  data() {
    return {
      modalShow: false,
      settings: {},
    };
  },
  methods: {
    goToAboutPage() {
      this.$router.push({
        name: "Dashboard",
      });
    },
    onShow(data) {
      this.modalShow = true;
      this.settings = data;
      console.log(data);
    },
    onHide() {
      this.settings = {};
      this.modalShow = false;
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
  components: {
    ModalWindowAddPaymentForm: () =>
      import("./components/ModalWindowAddPaymentForm.vue"),
    ContextMenu,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 50px;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
