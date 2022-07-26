<template>
  <div>
    <!-- <demo-one />
    <demo-two /> -->
    <!-- <composition-methods /> -->
    <!-- <composition-v-model /> -->
    <!-- <composition-computed /> -->
    <!-- <composition-watchers /> -->
    <!-- <parent-component /> -->
    <!-- <composition-template-refs /> -->
    <!-- <person-component /> -->
    <click-counter />
    <hover-counter />
  </div>
</template>

<script>
// import DemoOne from "./components/DemoOne.vue";
// import DemoTwo from "./components/DemoTwo.vue";
// import CompositionMethods from "./components/Methods.vue";
// import CompositionVModel from "./components/CompositionVModel.vue";
// import CompositionComputed from "./components/CompositionComputed.vue";
// import CompositionWatchers from "./components/CompositionWatchers.vue";
// import ParentComponent from "./components/Parent.vue";
// import CompositionTemplateRefs from "./components/CompositionTemplateRefs.vue";
// import PersonComponent from "./components/Person.vue";
import ClickCounter from "./components/ClickCounter.vue";
import HoverCounter from "./components/HoverCounter.vue";
export default {
  name: "App",
  components: {
    // DemoOne,
    // DemoTwo,
    // CompositionMethods,
    // CompositionVModel,
    // CompositionComputed,
    // CompositionWatchers,
    // ParentComponent,
    // CompositionTemplateRefs,
    // PersonComponent,
    ClickCounter,
    HoverCounter,
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
