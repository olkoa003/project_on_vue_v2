<template>
    <div>
    <AddPaymentForm @onclic="addPaymentData" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddPaymentForm from "@/components/AddPaymentForm.vue";

export default {
  name: "HomeView",
  components: {
    AddPaymentForm,
  },
  data() {
    return {};
  },
};
</script>