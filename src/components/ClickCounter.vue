<template>
  <div>
    <button @click="incrementCounter">Clicked {{ count }} times</button>
  </div>
</template>

<script>
import useCounter from "../composable/useCounter.js";
export default {
  name: "ClickCounter",
  setup() {
    const { count, incrementCounter } = useCounter(10, 5);

    return {
      count,
      incrementCounter,
    };
  },
};
</script>

<style scoped>
</style>