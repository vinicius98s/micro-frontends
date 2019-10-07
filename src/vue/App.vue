 1<template>
  <div>
    <h1>Vue app</h1>
    <h1>Counter: {{ counter }}</h1>
    <button @click="routeChange">Go to react page</button>
  </div>
</template>

<script>
import routes from "../routes";
import useReducer from "../utils/useReducer";

export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    routeChange() {
      routes.to("/");
    }
  },
  mounted() {
    const [store] = useReducer();
    this.counter = store.counter;
  }
};
</script>

<style>
</style>