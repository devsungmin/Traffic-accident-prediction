<template>
  <v-content>
    <v-container>
      <div class="check-traffic-img">
        <h2>업로드한 사진</h2>
        <div class="upload-img">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-img
                    src="https://i.pinimg.com/originals/20/61/8c/20618cc8dfecf917ce4a3c8baeef2421.jpg"
                    max-height="300px"
                    max-width="100%"
                  />
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
          text: "사고 종류",
          value: "traffic",
        },
        {
          text: "과실비울(%)",
          value: "fruitRatio",
        },
        {
          text: "정확도",
          value: "accuracy",
        },
      ],
      dataset: [
        {
          traffic: "추월 사고",
          fruitRatio: "30:20",
          accuracy: "98%",
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