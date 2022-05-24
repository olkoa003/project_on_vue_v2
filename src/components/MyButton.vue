<template>
  <button @click="clicked" >{{ title }}</button>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      title: 'SAVE COST'
    };
  },
   methods: {
    clicked(){
        const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
    this.$emit('onClickSave')
    }
  },
};
</script>

<style scoped>
</style>