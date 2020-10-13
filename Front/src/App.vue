<template>
  <v-app id="app">
    <router-view />
    <NevBar />
  </v-app>
</template>

<script>
import NevBar from "./components/NevBar";

export default {
  name: "App",
  components: {
    NevBar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.darkblue-color {
  color: #274555 !important;
}
.lightorange-color {
  color: #f9a11b !important;
}
</style>