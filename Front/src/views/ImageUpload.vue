<template>
  <v-content>
    <v-container>
      <div class="img-upload-page">
        <h2>ImageUpload Page</h2>
        <div class="img-upload">
          <input
            class="input-img"
            type="file"
            multiple="true"
            name="myfile"
            @change="uploadImages($event.target.name, $event.target.files)"
            @drop="uploadImages($event.target.name, $event.target.files)"
          />
          <div class="input-img-notice">
            <v-icon>mdi-camera</v-icon>
            <span>image upload</span>
          </div>
        </div>
        <div class="submit-button">
          <v-btn @click="test()">submit</v-btn>
        </div>
        <!-- TODO: 업로드한 이미지 확인 / 다중 이미지 처리 -->
      </div>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";

export default {
  name: "ImageUpload",
  methods: {
    uploadImages: function (name, files) {
      const formData = new FormData();
      const url = "http://192.168.0.10:3000/upload/1";

      formData.append(name, files[0], files[0].name);
      axios.post(url, formData).then((res) => {
        console.log("sucess" + res + "files");
      });
      this.$router.push("/check");
    },
    test: function () {
      console.log("upload image test");
      this.$router.push("/check");
    },
  },
};
</script>

<style lang="scss">
.img-upload-page {
  text-align: -webkit-center;
}

.img-upload-page > h2 {
  text-align: center;
}

.img-upload {
  outline: 2px dashed;
  width: 80%;
  height: 400px;
  position: relative;
  background: rgb(165, 171, 180);
  margin-top: 20px;
}

.input-img-notice {
  text-align: center;
  font-size: 30px;
}

.input-img {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
}

.submit-button {
  float: right;
  margin-top: 20px;
}
</style>
