<template>
  <v-main>
    <v-container>
      <div class="check-traffic-img">
        <h2>Check Car Accident Type</h2>
        <div class="upload-img">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-img src=http://localhost:3000/api/image/upload
                  max-height="300px" max-width="100%" />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
        <hr />
        <div class="model-traffic">
          <hr />
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
                <v-list-item>
                  <v-list-item-title v-text="item1" />
                  <v-list-item v-text="negligence" />
                  <hr />
                </v-list-item>
              </v-list>

              <v-list>
                <v-list-item>
                  <v-list-item-title v-text="item2" />
                  <v-list-item v-text="legalBasis" />
                  <hr />
                </v-list-item>
              </v-list>

              <v-list>
                <v-list-item>
                  <v-list-item-title v-text="item3" />
                  <v-list-item v-text="judicialPrecedent" />
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
    this.getDB();
  },
  data() {
    return {
      item1: "과실비율",
      item2: "법적근거",
      item3: "관련 판례",
      items: [
        { title: "과실비율" },
        { title: "법적근거" },
        { title: "관련 판례" },
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
      negligence: "",
      legalBasis: "",
      judicialPrecedent: "",
    };
  },
  methods: {
    getResult: function () {
      this.dataset = [];
      this.$axios.get(`/result`).then((res) => {
        let result = res.data.result;
        for (let i of result) {
          this.dataset.push({
            traffic: i.traffic,
            accuracy: i.accuracy,
          });
        }
      });
    },
    getDB: function () {
      this.$axios.get(`/result/information`).then((res) => {
        this.negligence = res.data[0].negligence;
        this.legalBasis = res.data[1].legalBasis;
        this.judicialPrecedent = res.data[2].judicialPrecedent;

        console.log(this.negligence);
        console.log("=========");
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
