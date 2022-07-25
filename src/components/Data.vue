<template>
  <div>
    <p>Hello, {{ firstName }}</p>
  </div>
  <p>Name : {{ name }}</p>
  <p>Major : {{ major }}</p>
  <p>GPA : {{ gpa }}</p>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "DataComponent",
  setup() {
    const firstName = ref("Shabiq");
    const student = reactive({
      name: "Anthony Sinisuka Ginting",
      major: "Computer Science",
      gpa: 3.98,
    });
    firstName.value = "Mohammad Ahsan";
    return {
      firstName,
      ...student,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>