<template>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <input type="number" v-model="gpa" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "CompositionVModel",
  setup() {
    const fullName = reactive({
      firstName: "",
      lastName: "",
    });
    const gpa = ref("");

    return {
      ...toRefs(fullName),
      gpa,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>