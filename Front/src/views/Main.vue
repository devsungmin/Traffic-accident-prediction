<template>
  <v-main>
    <v-container>
      <div class="main-page">
        <h2 class="darkblue-color">Hello! 😎</h2>
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
      <div class="go-upload-img">
        <v-btn color="primary" @click="goUploadImg()"
          >교통사고 이미지 업로드</v-btn
        >
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Main",
  components: {},
  methods: {
    goUploadImg: function () {
      this.$router.push("/upload");
    },
  },
};
</script>

<style lang="scss">
.main-page {
  text-align: center;
}
.go-upload-img {
  text-align: center;
}
</style>
