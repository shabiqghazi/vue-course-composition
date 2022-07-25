<template>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <input type="number" v-model="gpa" />
    <p>{{ greet }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";

export default {
  name: "CompositionComputed",
  setup() {
    const gpa = ref("");
    const state = reactive({
      firstName: "",
      lastName: "",
    });
    const greet = computed(
      () =>
        `Hello, ${state.firstName} ${state.lastName}, your gpa is ${gpa.value}`
    );

    return {
      ...toRefs(state),
      gpa,
      greet,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>