<template>
  <div>
    <p>NIM : {{ id }}</p>
    <p>Full Name : {{ fullName }}</p>
    <p>GPA : {{ gpa }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      fullName: "Muhammad Rian Ardianto",
      id: "1207050118",
      gpa: 3.98,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>