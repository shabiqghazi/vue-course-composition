<template>
  <div>
    <child-b />
  </div>
</template>

<script>
import ChildB from "./ChildB.vue";
export default {
  name: "ChildA",
  components: {
    ChildB,
  },
};
</script>

<style scoped>
</style>