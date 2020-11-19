<template>
  <v-main>
    <v-container>
      <div class="check-traffic-img">
        <h2>Upload Image</h2>
        <div class="upload-img">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-img src="img src" max-height="300px" max-width="100%" />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
        <div class="model-traffic">
          <v-data-table
            :headers="hearders"
            :items="dataset"
            class="elevation-1"
          >
          </v-data-table>
        </div>
        <div class="dialog">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
                dark
                @click="dialog = true"
                >상세 보기</v-btn
              >
            </template>
            <v-card>
              <v-toolbar color="primary"
                ><v-btn icon @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title id="dialog-title"
                  >교통사고 판례 보기</v-toolbar-title
                >
              </v-toolbar>
              <v-list>
                <v-list-item v-for="item in items" :key="item.title">
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "CheckTrafficAccident",
  created() {
    this.getResult();
  },
  data() {
    return {
      items: [
        { title: "추월사고" },
        { title: "추돌사고" },
        { title: "교차로 사고" },
      ],
      dialog: false,
      hearders: [
        {
          text: "Type of Accident",
          value: "traffic",
        },
        {
          text: "Accuracy(%)",
          value: "accuracy",
        },
      ],
      // 모델 결과 값
      dataset: [],
    };
  },
  methods: {
    getResult: function () {
      this.dataset = [];
      this.$axios.get(`/result`).then((res) => {
        console.log(res);
        let result = res.data.result;
        for (let i of result) {
          this.dataset.push({
            traffic: i.traffic,
            accuracy: i.accuracy,
          });
        }
      });
    },
  },
};
</script>
<style lang="scss">
.check-traffic-img {
  text-align: center;
}

.upload-img {
  margin-top: 20px;
}

.model-traffic {
  margin-top: 20px;
}

.dialog {
  margin-top: 20px;
}

#dialog-title {
  font-weight: bold;
  color: white;
}
</style>
