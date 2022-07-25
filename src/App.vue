<template>
  <div>
    <!-- <demo-one />
    <demo-two /> -->
    <!-- <composition-methods /> -->
    <composition-v-model />
  </div>
</template>

<script>
// import DemoOne from "./components/DemoOne.vue";
// import DemoTwo from "./components/DemoTwo.vue";
// import CompositionMethods from "./components/Methods.vue";
import CompositionVModel from "./components/CompositionVModel.vue";
export default {
  name: "App",
  components: {
    // DemoOne,
    // DemoTwo,
    // CompositionMethods,
    CompositionVModel,
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
