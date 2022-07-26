<template>
  <div><input type="text" v-model="firstName" /></div>
  <div><input type="text" v-model="lastName" /></div>
  <person-greet
    :firstName="firstName"
    :lastName="lastName"
    @callName="callName"
  />
</template>

<script>
import { ref } from "vue";
import PersonGreet from "./PersonGreet.vue";
export default {
  name: "PersonComponent",
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const callName = (res) => {
      alert(`Hello, ${res.value}`);
    };

    return {
      firstName,
      lastName,
      callName,
    };
  },
  components: {
    PersonGreet,
  },
};
</script>

<style scoped>
</style>