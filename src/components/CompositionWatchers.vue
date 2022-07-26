<template>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
  </div>
  <div>
    <input type="text" v-model="fname" />
    <input type="text" v-model="lname" />
    <input type="number" v-model="title.rank" />
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from "vue";
import _ from "lodash";
export default {
  name: "CompositionWatchers",
  setup() {
    const fullName = reactive({
      fname: "",
      lname: "",
      title: {
        rank: "",
      },
    });

    watch(
      () => _.cloneDeep(fullName),
      (newValue, oldValue) => {
        console.log("old fname ", oldValue.fname);
        console.log("old lname ", oldValue.lname);
        console.log("old rank ", oldValue.title.rank);
        console.log("new fname ", newValue.fname);
        console.log("new lname ", newValue.lname);
        console.log("newRank ", newValue.title.rank);
      },
      {
        deep: true,
      }
    );

    const firstName = ref("");
    const lastName = ref("");

    // watch(
    //   [firstName, lastName],
    //   (newValues, oldValues) => {
    //     console.log("old FirstName ", oldValues[0]);
    //     console.log("new FirstName ", newValues[0]);
    //     console.log("old LastName ", oldValues[1]);
    //     console.log("new LastName ", newValues[1]);
    //   },
    //   {
    //     immediate: true,
    //   }
    // );

    return { firstName, lastName, ...toRefs(fullName) };
  },
};
</script>

<style scoped>
</style>