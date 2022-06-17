<template>
  <div class="home">
    <Calc />
  </div>
</template>

<script>
// @ is an alias to /src
import Calc from "@/components/Calc.vue";

export default {
  name: "HomeView",
  components: {
    Calc,
  },
  data() {
    return {
      result: 0,
      operand1: 0,
      operand2: 0,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      picked: "",
    };
  },
};
</script>
