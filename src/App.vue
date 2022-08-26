<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {};
  },
  created() {
  },
  methods: {
  },
};
</script>

<style>
.section-title {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  color: #ffffff;
}

.sub-title {
  font-family: "Rubik";
  font-style: normal;
  font-size: 16px !important;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0.8px;
}

.content-text {
  font-family: "SF Pro Display";
  color: black;
  font-weight: 600 !important;
  font-size: 16px;
  letter-spacing: 0.8px;
}

@media (min-width: 1440px) {
  .container {
    max-width: 1400px !important;
  }
}
</style>
