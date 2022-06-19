<template>
  <div class="wrapper">
    <h3 class="header 3rem pb-3">{{ settings.title }}</h3>
    <div class="content">
      <component :is="settings.component" :values="settings.props" />
    </div>
    <div class="footer">
      <v-btn class="mt-5" @click="onCloseClick">Close</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindowAddPaymentForm",
  props: {
    settings: Object
  },
  components: {
    AddPaymentForm: () => import("./AddPaymentForm.vue"),
    AuthForm: () => import("./AuthForm.vue"),
  },
  methods: {
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  padding: 20px;
  position: absolute;
  top: 33%;
  right: 40%;
  background: #efefef;
  width: 400px;
  z-index: 1;
}
</style>