<template>
  <div class="navibar">
    <v-app-bar app color="white">
      <div class="page-title" @click="goHome()">
        <span class="lightorange-color"
          >Car Accident Type & Mutual Negligence Information</span
        >
      </div>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NebBar",
  methods: {
    goHome: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.page-title {
  font-weight: bold;
  font-size: 20px;
}
</style>
