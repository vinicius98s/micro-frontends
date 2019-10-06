 1<template>
  <div>
    <h1>Vue app</h1>
    <button @click="routeChange">Go to react page</button>
  </div>
</template>

<script>
import routes from "../routes";
export default {
  methods: {
    routeChange() {
      routes.to("/");
    }
  }
};
</script>

<style>
</style>