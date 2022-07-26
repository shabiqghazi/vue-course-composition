import { ref } from "vue";
export default function useCounter(init = 0, step = 1) {
  const count = ref(init);

  const incrementCounter = () => {
    count.value += step;
  };
  return {
    count,
    incrementCounter,
  };
}
