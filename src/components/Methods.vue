<template>
  <div>
    <h2>Clicked {{ count }} times</h2>
    <button class="btn btn-secondary" @click="incrementCount">Click</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    function incrementCount() {
      state.count++;
    }

    return {
      ...toRefs(state),
      incrementCount,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>