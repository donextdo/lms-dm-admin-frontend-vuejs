<template>
  <v-card flat height="432" width="50%" color="transparent">
    <h2 class="title">Welcome back</h2>
    <v-form>
      <div class="square"></div>
      <h2 class="heading"></h2>

      <div class="d-flex flex-column justify-center align-left form-control">
        <label for="" class="label">Email</label>
        <v-text-field
          v-model="user.email"
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
          v-model="user.password"
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
          v-model="user.remember"
          color="warning"
          label="Remember me"
          hide-details
          class="mt-0"
        ></v-checkbox>

        <a href="" class="forgot">Forgot password?</a>
      </div>

      <v-btn
        style="margin-top: 3%"
        :width="laptop ? '210px' : '410px'"
        color="#ffa500"
        :height="laptop ? '35px' : '42px'"
        elevation="0"
        @click="login()"
        class="btn rounded-lg"
        >Sign In</v-btn
      >
    </v-form>
  </v-card>
</template>

<script>
import { Form } from "vform";
window.Form = Form;
export default {
  name: "login-form",
  data() {
    return {
      laptop: null,
      user: new Form({
        //user oject create
        password: "",
        email: "",
        remember: false,
      }),

      items: ["Sri Lanka", "India", "Australia", "England"],

      subjects: ["Dancing", "Music", "Drama"],
    };
  },
};
</script>

<style scoped>
.title {
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  color: #251605;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 500;
}

.form-row {
  display: flex;
  width: 100%;
  gap: 1rem;

  justify-content: space-between;
}

.form-control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
}

label {
  font-size: 15px;
  margin-bottom: 0;
  font-weight: 500;
}

.register {
  display: block;
  width: 270px;
  background-color: #ffa500;
  padding-block: 8px;
  cursor: pointer;
  align-self: center;
  font-size: 15px;
  margin: 0 auto;
  font-weight: 500;
  border-radius: 8px;
}

.sing-in {
  font-size: 10px;
  text-align: center;
  margin-top: 5px;
  font-weight: 400;
}

.sing-in > span {
  color: #ffa500;
}
</style>
