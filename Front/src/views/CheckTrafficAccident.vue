<template>
  <v-main>
    <v-container>
      <div class="check-traffic-img">
        <h2>교통사고 유형 확인</h2>
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
            hide-default-footer
          >
          </v-data-table>
        </div>
        <div class="result-traffic">
          <span>사고 유형 : {{ this.trafficName }} / </span>
          <span>과실 비율 : {{ this.fruitRatio }} / </span>
          <span>모델 정확도: {{ this.accuracyT }}</span>
        </div>
        <div class="dialog">
          <v-dialog
            v-model="dialog"
            hide-overlay
            width="800px"
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#f9a11b"
                v-bind="attrs"
                v-on="on"
                dark
                @click="dialog = true"
                >상세 보기</v-btn
              >
            </template>
            <v-card>
              <v-toolbar color="#f9a11b"
                ><v-btn icon @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title id="dialog-title"
                  >교통사고 판례 보기</v-toolbar-title
                >
              </v-toolbar>
              <div class="traffic-db">
                <v-list>
                  <v-list-item>
                    <v-list-item-title
                      class="information-title"
                      v-text="item1"
                    />
                    <v-list-item v-text="negligence" />
                  </v-list-item>
                </v-list>
                <v-divider />
                <v-list>
                  <v-list-item>
                    <v-list-item-title
                      class="information-title"
                      v-text="item2"
                    />
                    <v-list-item v-text="legalBasis" />
                    <hr />
                  </v-list-item>
                </v-list>
                <v-divider />
                <v-list>
                  <v-list-item>
                    <v-list-item-title
                      class="information-title"
                      v-text="item3"
                    />
                    <v-list-item v-text="judicialPrecedent" />
                  </v-list-item>
                </v-list>
              </div>
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
      dialog: false,
      hearders: [
        {
          text: "사고 유형",
          value: "traffic",
        },
        {
          text: "정확도(%)",
          value: "accuracy",
        },
      ],
      // 모델 결과 값
      dataset: [],
      negligence: "",
      legalBasis: "",
      judicialPrecedent: "",
      fruitRatio: "",
      trafficName: "",
      accuracyT: "",
    };
  },
  methods: {
    getResult: function () {
      this.dataset = [];
      this.$axios.get(`/result`).then((res) => {
        let result = res.data.result;
        console.log(result);
        for (let i of result) {
          this.dataset.push({
            traffic: i.traffic,
            accuracy: i.accuracy,
          });
          if (res.data.result[0].accuracy > res.data.result[1].accuracy) {
            this.accuracyT = res.data.result[0].accuracy;
          } else {
            this.accuracyT = res.data.result[1].accuracy;
          }
        }
      });
    },
    getDB: function () {
      this.$axios.get(`/result/information`).then((res) => {
        this.negligence = res.data[0].negligence;
        this.legalBasis = res.data[1].legalBasis;
        this.judicialPrecedent = res.data[2].judicialPrecedent;
        this.fruitRatio = res.data[3].fruitRatio;
        this.trafficName = res.data[4].trafficName;
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

.information-title {
  text-align: center;
  font-weight: bold;
  font-size: 20px !important;
}

.result-traffic {
  font-weight: bold;
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.traffic-db {
  padding: 20px;
}

#dialog-title {
  font-weight: bold;
  color: white;
}
</style>
