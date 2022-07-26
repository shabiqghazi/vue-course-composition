<template>
  <div>
    <child-c />
  </div>
</template>

<script>
import ChildC from "./ChildC.vue";

export default {
  name: "ChildB",
  components: {
    ChildC,
  },
};
</script>

<style scoped>
</style>