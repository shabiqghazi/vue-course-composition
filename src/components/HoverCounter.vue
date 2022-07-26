<template>
  <div>
    <h4 @mouseover="incrementCounter">Hovered {{ count }} times</h4>
  </div>
</template>

<script>
import useCounter from "../composable/useCounter.js";
export default {
  name: "HoverCounter",
  setup() {
    const { count, incrementCounter } = useCounter();

    return {
      count,
      incrementCounter,
    };
  },
};
</script>

<style scoped>
</style>