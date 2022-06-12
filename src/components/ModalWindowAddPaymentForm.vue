<template>
  <div class="wrapper">
    <div class="header">{{ settings.title }}</div>
    <div class="content">
      <component :is="AddPaymentForm" :item="settings.content"/>
     </div>
    <div class="footer">
      <button class="save-button" @click="onCloseClick">Close</button>
    </div>
  </div>
</template>

<script>
export default{
    name: "ModalWindowAddPaymentForm",
    props: {
      settings: Object,
      id: Number
    },
    components: {
        AddPaymentForm: ()=>import('./AddPaymentForm.vue'),
        AuthForm: ()=>import('./AuthForm.vue')
    },
    methods: {
        onCloseClick() {
            this.$modal.hide();
        }
    },
}
</script>

<style lang="scss" scoped >
.wrapper{
    position: absolute;
    top: 31%;
    left: 45%;
    background: #efefef;
    padding-top: 30px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 35px;
}

.header{
    font-size: 30px;
    text-align: center;
    color: black;
}
</style>