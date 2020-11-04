<template>
  <v-content>
    <v-container>
      <div class="main-page">
        <h2 class="darkblue-color">This page is a service<br />that provides informationon car accident types and mutual negligence 😎</h2>
        <br />
      </div>
      <v-flex md12 xs12 justify-center style="text-align: center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Q9tHRkhdqyQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Main",
  components: {},
};
</script>

<style lang="scss">
.main-page {
  text-align: center;
}
</style>
