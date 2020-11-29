<template>
  <v-main>
    <v-container>
      <div class="main-page">
        <h1 class="darkblue-color">안녕하세요! 😎</h1>
        <br />
        <span
          >이 홈페이지는 사용자가 교통 사고 사진을 업로드 하여<br />교통 사고
          유형을 확인 할 수 있는 홈페이지 입니다.</span
        >
        <div class="system-img">
          <v-img src="../../public/system.png" width="1000px" />
        </div>
        <span>👇아래 버튼을 클릭하여 교통 사고 사진을 업로드해 주세요!!👇</span>
        <div class="go-upload-img">
          <v-btn
            class="upload-btn"
            cols="12"
            color="#f9a11b"
            width="60%"
            height="50px"
            @click="goUploadImg()"
            >교통사고 이미지 업로드</v-btn
          >
        </div>
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

.system-img {
  text-align: -webkit-center;
}

.go-upload-img {
  margin-top: 20px;
}

.upload-btn {
  font-size: 20px !important;
}

.main-page > span {
  font-size: 28px;
}
</style>