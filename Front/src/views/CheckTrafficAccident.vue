<template>
  <v-content>
    <v-container>
      <div class="check-traffic-img">
        <h2>Upload Image</h2>
        <div class="upload-img">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-img src="https://img5.yna.co.kr/mpic/YH/2020/06/20/MYH20200620007700038_P4.jpg" max-height="300px" max-width="100%" />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
        <div class="model-traffic">
          <v-data-table :headers="hearders" :items="dataset" class="elevation-1"> </v-data-table>
        </div>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "CheckTrafficAccident",
  data() {
    return {
      hearders: [
        {
          text: "Type of Accident",
          value: "traffic",
        },
        {
          text: "Negligence Ratio (L:R)",
          value: "negligence",
        },
        {
          text: "Accuracy(%)",
          value: "accuracy",
        },
      ],
      dataset: [
        {
          traffic: "추월 사고",
          negligence: "80:20",
          accuracy: "98%",
        },
        {
          traffic: "추돌 사고",
          negligence: "50:50",
          accuracy: "80%",
        },
        {
          traffic: "교차로 사고",
          negligence: "20:80",
          accuracy: "60%",
        },
      ],
    };
  },
  methods: {},
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
</style>
