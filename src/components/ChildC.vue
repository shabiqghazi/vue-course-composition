<template>
  <div>
    <h2>Child Component</h2>
    <h3>count = {{ count }}</h3>
    <button @click="incrementCount">Click</button>
    <h3>Full Name : {{ firstName }} {{ lastName }}</h3>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "ChildC",
  setup() {
    const count = inject("count", 0);
    const incrementCount = inject("incrementCount", () => false);

    const state = inject("state", {});

    return {
      count,
      incrementCount,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
</style>