<template>
  <div>Hello, {{ fullName }}</div>
  <button @click="callName">Call Name</button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PersonGreet",
  setup(props, context) {
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });
    const callName = () => {
      context.emit("callName", fullName);
    };

    return {
      fullName,
      callName,
    };
  },
  props: ["firstName", "lastName"],
  emits: ["callName"],
};
</script>

<style scoped>
</style>