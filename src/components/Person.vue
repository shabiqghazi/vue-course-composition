<template>
  <div><input type="text" v-model="firstName" /></div>
  <div><input type="text" v-model="lastName" /></div>
  <person-greet :firstName="firstName" :lastName="lastName" />
</template>

<script>
import { ref } from "vue";
import PersonGreet from "./PersonGreet.vue";
export default {
  name: "PersonComponent",
  setup() {
    const firstName = ref("");
    const lastName = ref("");

    return {
      firstName,
      lastName,
    };
  },
  components: {
    PersonGreet,
  },
};
</script>

<style scoped>
</style>