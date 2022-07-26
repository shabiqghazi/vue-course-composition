<template>
  <div>
    <h2>Parent Component</h2>
    <h3>count = {{ count }}</h3>
    <button @click="incrementCount">Click</button>
    <h3>Full Name : {{ firstName }} {{ lastName }}</h3>
    <hr />
    <child-a />
  </div>
</template>

<script>
import ChildA from "./ChildA.vue";
import { provide, ref, reactive, toRefs } from "vue";
export default {
  name: "ParentComponent",
  components: {
    ChildA,
  },
  setup() {
    const count = ref(0);
    const incrementCount = () => {
      count.value++;
    };
    provide("count", count);
    provide("incrementCount", incrementCount);

    const state = reactive({
      firstName: "Shabiq",
      lastName: "Ghazi Arkaan",
    });
    provide("state", state);

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