<template>
  <div>{{ fullName }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DemoOne",
  setup() {
    const fullName = ref("Shabiq Ghazi Arkaan");

    setTimeout(() => {
      fullName.value = "Fajar Alfian";
    }, 2000);

    return {
      fullName,
    };
  },
};
</script>

<style scoped>
</style>