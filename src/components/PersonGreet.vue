<template>
  <div>Hello, {{ fullName }}</div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PersonGreet",
  setup(props) {
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });
    return {
      fullName,
    };
  },
  props: ["firstName", "lastName"],
};
</script>

<style scoped>
</style>