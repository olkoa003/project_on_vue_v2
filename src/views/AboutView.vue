<template>
  <div class="about">
    <h1>My Personal Costs Page</h1>
      <PersonalCosts/>
  </div>
</template>

<script>
import PersonalCosts from "@/components/PersonalCosts.vue";

export default {
  name: "AboutView",
  components: {
    PersonalCosts
  },
}
</script>