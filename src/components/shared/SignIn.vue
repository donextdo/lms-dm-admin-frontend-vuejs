<template>
  <v-card
    :height="laptop ? '460px' : '634px'"
    :width="laptop ? '380px' : '510px'"
    flat
    class="d-flex flex-column align-center"
    color="transparent"
  >
    <v-alert
      class="alert"
      :value="error"
      type="error"
      border="left"
      width="30vw"
      prominent
      transition="scroll-x-reverse-transition"
      >{{ errormsg }}</v-alert
    >
    <div class="square"></div>
    <h2 class="heading">{{ title }}</h2>

    <div class="d-flex flex-column justify-center align-left form-control">
      <TextInputVue
        label="Email"
        style="width: 510px"
        parent="page"
        type="text"
        :modelValue="user.email"
        @update:modelValue="(newValue) => (user.email = newValue)"
      />
    </div>

    <div class="d-flex flex-column justify-center align-left form-control">
      <TextInputVue
        label="Password"
        style="width: 510px"
        parent="page"
        :type="!check ? 'password' : 'text'"
        :modelValue="user.password"
        @update:modelValue="(newValue) => (user.password = newValue)"
      />
    </div>
    
    <div class="d-flex flex-row justify-content-between align-left form-control">
      <v-checkbox
        dense
        v-model="user.remember"
        color="warning"
        label="Remember me"
        hide-details
        class="mt-0 px-3"
      ></v-checkbox>
      <!-- <v-checkbox
        dense
        v-model="check"
        color="warning"
        label="Show password"
        hide-details
        class="mt-0 px-3"
      ></v-checkbox> -->
      <a href="" class="forgot px-3">Forgot password?</a>
    </div>

    <v-btn
      :width="laptop ? '525px' : '510px'"
      color="#ffa500"
      :height="laptop ? '55px' : '62px'"
      elevation="0"
      @click="login()"
      class="btn rounded-lg"
      >Sign In</v-btn
    >
    <div class="sing-in">
      Don't have an account? <span @click="signup">Sign up now!</span>
    </div>
  </v-card>
</template>

<script>
//vForms
import axios from "axios";
import TextInputVue from "./TextInput.vue";
import { Form } from "vform";
window.Form = Form;
export default {
  name: "singin-vue",

  props: ["title"],

  data() {
    return {
      errormsg: null,
      check: false,
      error: false,
      laptop: null,
      user: new Form({
        //user oject create
        password: "",
        email: "",
        remember: false,
      }),
    };
  },
  components: { TextInputVue },
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
    async login() {
      await this.user
        .post(this.$hostname + "/api/login")
        .then((response) => {
          if (response.status == 200) {
            sessionStorage.setItem("token", response.data.data.token);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${response.data.data.token}`;
            sessionStorage.setItem("role", response.data.data.role_id);
            this.$router.push({ name: "DashboardView" });
          }
          this.user.reset(); //reset the form data after submit
        })

        .catch((error) => {
          console.log(error);
          if (error.response.status == 500) {
            this.errormsg = "something went wrong";
          } else {
            this.errormsg = Object.values(
              JSON.parse(error.request.response).data
            )[0][0];
          }
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        });
    },
    signup() {
      window.location.href = "student";
    },
  },
};
</script>

<style scoped>
.square {
  padding-top: 60px;
  height: 117px;
  width: 117px;
  background-color: #ffa500;
}

.heading {
  font-size: 32px;
  line-height: 32px;
  margin-top: 31px;
  font-family: "Reckless Neue";
}

.v-text-field {
  width: 510px;
}

.form-control {
  margin-top: 65px;
  padding: 0%;
  width: max-content;
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
  margin-top: 10%;
  font-size: 18px !important;
  text-transform: capitalize;
  font-weight: 800 !important;
  margin-left: 13px !important;
}
.sing-in {
  margin-top: auto;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  font-weight: 400;
}

.sing-in > span {
  cursor: pointer;
  color: #ffa500;
  font-weight: 500;
  margin-left: 5px;
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
    font-size: 28px;
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
