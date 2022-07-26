<template>
  <div>
    <!-- <demo-one />
    <demo-two /> -->
    <!-- <composition-methods /> -->
    <!-- <composition-v-model /> -->
    <!-- <composition-computed /> -->
    <composition-watchers />
  </div>
</template>

<script>
// import DemoOne from "./components/DemoOne.vue";
// import DemoTwo from "./components/DemoTwo.vue";
// import CompositionMethods from "./components/Methods.vue";
// import CompositionVModel from "./components/CompositionVModel.vue";
// import CompositionComputed from "./components/CompositionComputed.vue";
import CompositionWatchers from "./components/CompositionWatchers.vue";
export default {
  name: "App",
  components: {
    // DemoOne,
    // DemoTwo,
    // CompositionMethods,
    // CompositionVModel,
    // CompositionComputed,
    CompositionWatchers,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
