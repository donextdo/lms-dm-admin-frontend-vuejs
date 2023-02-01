<template>
  <v-app id="app" class="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",

  components: {},

  data() {
    return {};
  },
  created() {
    this.setTokenOnRefresh()
  },
  methods: {
    setTokenOnRefresh()
    {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
      axios.defaults.headers.common['Content-Type'] =  'multipart/form-data'; 
      axios.defaults.headers.common['responseType'] =  'blob'; 

    },
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;400;600;700&display=swap');

html {
  overflow-y: auto !important;
}

body {
  font-family: 'Source Serif Pro', serif;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #000
}

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

.container {
  width: 100%;
  height: 100%;
}

::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 165, 0, 0.4);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 165, 0, 0.6);
  }

@media (min-width: 1440px) {
  .container {
    max-width: 1400px !important;
  }
}
</style>
