<template>
  <v-card height="60vh" width="28vw" flat class="card" color="transparent">
    <div class="rectangle"></div>

    <h2 class="title">{{ title }}</h2>

    <!-- <v-form> -->
    <v-row>
      <v-col class="d-flex" cols="12" sm="12">
        <div class="form-control">
          <label for="">Email</label>
          <v-text-field
            loading="false"
            background-color="#fff"
            class="input"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>

    <v-row >
      <v-col class="d-flex" cols="12" sm="12">
        <div class="form-control">
          <label for="">Password</label>
          <v-text-field
            loading="false"
            background-color="#fff"
            type="password"
            class="input"
          ></v-text-field>
        </div>
      </v-col>
      <v-checkbox
      small
      v-model="checkbox"
      label="Remember me"
      color="warning"
      hide-details
    ></v-checkbox>

    <v-span class="forgot">Forgot password?</v-span>
    </v-row>

    <v-btn width="400px" color="#ffa500" flat>Sign In</v-btn>
    

    <!-- </v-form> -->
  </v-card>
</template>

<script>
export default {
  name: "singin-vue",

  props: ["title"],
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-top: 0.8rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
}

.rectangle {
  background-color: #ffa500;
  height: 80px;
  width: 80px;
}

.input {
  font-size: 16px;  
}
.v-text-field {
  width: 400px;
}

.row {
  flex: initial;
}

.row + .row {
  margin-top: 0;
}

.v-input--selection-controls {
    margin-top: -25px;
    margin-left: 9px;
}

.forgot {
  color: #ffa500;
  margin-top: -22px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: bold;
}

.v-btn {
  margin-top: 2rem;
}

</style>