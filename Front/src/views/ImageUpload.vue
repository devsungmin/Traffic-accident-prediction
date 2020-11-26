<template>
  <v-main>
    <v-container>
      <div class="img-upload-page">
        <h2>ImageUpload Page</h2>
        <v-col cols="12" v-show="loading">
          <v-progress-linear
            v-model="traing"
            v-show="loading"
            :active="show"
            indeterminate
            color="#f9a11b"
          ></v-progress-linear>
        </v-col>
        <div class="img-upload">
          <input
            class="input-img"
            type="file"
            name="trafficImg"
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
  </v-main>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "ImageUpload",
  data() {
    return {
      loading: false,
      show: true,
    };
  },
  methods: {
    uploadImages: function (name, files) {
      const formData = new FormData();
      this.loading = true;

      formData.append(name, files[0]);
      this.$axios.post(`/image/upload`, formData).then((res) => {
        if (res.status == 200) {
          Swal.fire({
            title: "Upload Image",
            text: "Sucess upload image!",
            icon: "success",
          });
          this.$router.push("/check");
        }
      });
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
  background: #f9a11b;
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
