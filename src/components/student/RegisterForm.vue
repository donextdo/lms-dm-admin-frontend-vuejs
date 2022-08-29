<template>
  <v-card flat height="432" width="100%" color="transparent">
    <h2 class="title">Create your Account</h2>
    <v-form>
      <v-row>
        <v-col>
          <div class="form-control">
            <label for="">Full name</label>
            <v-text-field
              loading="false"
              dense
              background-color="#fff"
            ></v-text-field>
          </div>
        </v-col>

        <v-col>
          <div class="form-control">
            <label for="">Email</label>
            <v-text-field
              loading="false"
              dense
              background-color="#fff"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="form-control">
            <label for="">Contact Number</label>
            <v-text-field
              loading="false"
              dense
              background-color="#fff"
            ></v-text-field>
          </div>
        </v-col>

        <v-col>
          <div class="form-control">
            <label for="">Date of Birth</label>
            <v-text-field
              type="date"
              loading="false"
              placeholder=""
              dense
              background-color="#fff"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="form-control">
            <label for="">Country</label>
            <v-combobox
              loading="false"
              dense
              background-color="#fff"
              :items="items"
            ></v-combobox>
          </div>
        </v-col>

        <v-col>
          <div class="form-control">
            <label for="">Subjects you want to learn</label>
            <v-combobox
              loading="false"
              dense
              background-color="#fff"
              :items="subjects"
            ></v-combobox>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="form-control">
            <label for="">Create a Password</label>
            <v-text-field
              type="password"
              loading="false"
              dense
              background-color="#fff"
            ></v-text-field>
          </div>
        </v-col>

        <v-col>
          <div class="form-control">
            <label for="">Confirm Password</label>
            <v-text-field
              type="password"
              loading="false"
              dense
              background-color="#fff"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <button class="register">Register</button>
      <div class="sing-in">Already have an account? <span>Sing In!</span></div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "register-form",

  data() {
    return {
      items: ["Sri Lanka", "India", "Australia", "England"],

      subjects: ["Dancing", "Music", "Drama"],
    };
  },
};
</script>

<style>
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
  margin-top: -10px;
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
