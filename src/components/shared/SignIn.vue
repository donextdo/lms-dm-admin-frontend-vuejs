<template>
  <v-card
    :height="laptop ? '460px' : '634px'"
    :width="laptop ? '380px' : '510px'"
    flat
    class="d-flex flex-column align-center"
    color="transparent"
  >
    <div class="square"></div>
    <h2 class="heading">{{ title }}</h2>

    <div class="d-flex flex-column justify-center align-left form-control">
      <label for="" class="label">Email</label>
      <v-text-field
        loading="false"
        background-color="#fff"
        :height="laptop ? '35px' : '45px'"
        hide-details
        class="input"
      ></v-text-field>
    </div>

    <div class="d-flex flex-column justify-center align-left form-control">
      <label for="" class="label">Password</label>
      <v-text-field
        type="password"
        loading="false"
        background-color="#fff"
        :height="laptop ? '35px' : '45px'"
        hide-details=""
        class="input"
      ></v-text-field>
    </div>

    <div class="d-flex justify-space-between align-center options-row">
      <v-checkbox
        dense
        v-model="checkbox"
        color="warning"
        label="Remember me"
        hide-details
        class="mt-0"
      ></v-checkbox>

      <a href="" class="forgot">Forgot password?</a>
    </div>

    <v-btn
      :width="laptop ? '380px' : '510px'"
      color="#ffa500"
      :height="laptop ? '45px' : '62px'"
      elevation="0"
      @click="test()"
      class="btn rounded-lg"
      >Sign In</v-btn
    >
  </v-card>
  
</template>

<script>
export default {
  name: "singin-vue",

  props: ["title"],

  data() {
    return {
      laptop: null,
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth < 1400) {
        this.laptop = true;
        return;
      } else {
        this.laptop = false;
      }
    },

    test() {
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<style scoped>
.square {
  height: 117px;
  width: 117px;
  background-color: #ffa500;
}

.heading {
  font-size: 32px;
  line-height: 32px;
  margin-top: 31px;
}

.v-text-field {
  width: 510px;
}

.form-control {
  margin-top: 65px;
}

.form-control + .form-control {
  margin-top: 31px;
}

.label {
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 500;
}

.options-row {
  width: 100%;
  margin-top: 22px;
}

.btn {
  margin-top: auto;
  font-size: 18px !important;
  text-transform: capitalize;
  font-weight: bold;
}

.forgot {
  color: #ffa500;
  font-weight: 500;
}

.input {
  font-size: 20px;
}

@media (max-width: 1400px) {
  .square {
    height: 70px;
    width: 70px;
  }

  .heading {
    font-size: 22px;
    line-height: 24px;
    margin-top: 23px;
  }

  .v-text-field {
    width: 380px;
  }

  .form-control {
    margin-top: 35px;
  }

  .form-control + .form-control {
    margin-top: 20px;
  }

  .label {
    font-size: 16px;
    margin-bottom: 0px;
    font-weight: 500;
  }

  .options-row {
    width: 100%;
    margin-top: 12px;
  }

  .btn {
    font-size: 16px !important;
  }

  .input {
    font-size: 15px;
  }
}
</style>
