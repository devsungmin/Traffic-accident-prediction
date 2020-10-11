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
      formData.append(name, files[0], files[0].name);
      const url = "http://127.0.0.1:3000/upload/1";
      axios.post(url, formData).then((res) => {
        console.log("sucess" + res + "files");
        this.$router.push("/check");
      });
    },
  },
};
</script>

<style lang="scss">
.img-upload-page > h2 {
  text-align: center;
}

.img-upload {
  outline: 2px dashed;
  width: 100%;
  height: 500px;
  position: relative;
  background: cornflowerblue;
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
</style>