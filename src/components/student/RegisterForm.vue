<template>
  <v-card flat height="432" width="100%" color="transparent">
    <v-alert
      class="alert"
      :value="success"
      type="success"
      border="left"
      width="30vw"
      prominent
      transition="scroll-x-reverse-transition"
    >
      Registered successfully</v-alert
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
    <h2 class="title">Create your Account</h2>
    <v-row>
      <v-col>
        <div class="form-control">
          <TextInputVue
            label="Full Name"
            parent="page"
            type="text"
            :modelValue="user.name"
            @update:modelValue="(newValue) => (user.name = newValue)"
          />
        </div>
      </v-col>

      <v-col>
        <div class="form-control">
          <TextInputVue
            label="Email"
            parent="page"
            type="text"
            :modelValue="user.email"
            @update:modelValue="(newValue) => (user.email = newValue)"
          />
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="form-control">
          <TextInputVue
            label="Contact Number"
            parent="page"
            type="text"
            :modelValue="user.contact_no"
            @update:modelValue="(newValue) => (user.contact_no = newValue)"
          />
        </div>
      </v-col>

      <v-col>
        <div class="form-control">
          <TextInputVue
            label="Date Of Birth"
            parent="page"
            type="date"
            :modelValue="user.date_of_birth"
            @update:modelValue="(newValue) => (user.date_of_birth = newValue)"
          />
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="form-control">
          <TextInputVue
            label="Country"
            parent="page"
            type="select"
            :initialValue="countries.countries[0]"
            :items="countries.countries"
            :modelValue="user.country_id"
            @update:modelValue="(newValue) => (user.country_id = newValue)"
          />
        </div>
      </v-col>

      <v-col>
        <div class="form-control">
          <TextInputVue
            label="Subject you want to learn"
            parent="page"
            type="select"
            :initialValue="subjects.subjects[0]"
            :items="subjects.subjects"
            :modelValue="user.subject_id"
            @update:modelValue="(newValue) => (user.subject_id = newValue)"
          />
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="form-control">
          <TextInputVue
            label="Create a password"
            parent="page"
            :type="!check ? 'password' : 'text'"
            :modelValue="user.password"
            @update:modelValue="(newValue) => (user.password = newValue)"
          />
        </div>
      </v-col>
      <v-col>
        <div class="form-control">
          <TextInputVue
            label="Confirm password"
            parent="page"
            :type="!check ? 'password' : 'text'"
            :modelValue="user.password_confirmation"
            @update:modelValue="
              (newValue) => (user.password_confirmation = newValue)
            "
          />
        </div>
      </v-col>
    </v-row>
    <!-- <v-checkbox
      dense
      v-model="check"
      color="warning"
      label="Show password"
      hide-details
      class="mt-0 px-3"
    ></v-checkbox> -->
    <StudentDataUpload @toggle="toggle" v-if="showForm" @create="create" />
    <Button
      style="margin-left: 20%; width: 400px; margin-top: 6%"
      text="Register"
      @click="toggle"
    />

    <div class="sing-in">
      Already have an Account? <span @click="signin">Sign In!</span>
    </div>
    <loader v-if="loader" />
  </v-card>
</template>

<script>
import loader from "../shared/loader.vue";
import Button from "../shared/Button.vue";
import StudentDataUpload from "../shared/StudentDataUpload.vue";
import TextInputVue from "../shared/TextInput.vue";
import axios from "axios";
import { Form } from "vform";
window.Form = Form;
export default {
  name: "register-form",
  components: {
    TextInputVue,
    StudentDataUpload,
    Button,
    loader,
  },
  data() {
    return {
      check: false,
      errormsg: null,
      countries: {},
      showForm: false,
      subjects: {},
      success: false,
      error: false,
      loader: false,

      user: new Form({
        name: "",
        password: "",
        email: "",
        password_confirmation: "",
        contact_no: "",
        date_of_birth: "",
        country_id: "",
        subject_id: "",
        remember: false,
      }),
      userData: new FormData(),
    };
  },
  created() {
    this.get_countries();
    this.get_subjects();
  },
  methods: {
    async get_countries() {
      await axios
        .get(this.$hostname + "/api/countries")
        .then((response) => {
          if (response.status == 200) {
            this.countries = response.data.data;
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggle() {
      this.showForm = !this.showForm;
    },

    async get_subjects() {
      await axios
        .get(this.$hostname + "/api/subjects")
        .then((response) => {
          if (response.status == 200) {
            this.subjects = response.data.data;
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signin() {
      window.location.href = "/";
    },
    async register() {
      this.loader = true;

      await axios
        .post(this.$hostname + "/api/register", this.userData)
        .then((response) => {
          if (response.status == 200) {
            console.log(response);
            this.toggle();
            this.loader = false;
            this.success = true;
            setTimeout(() => {
              this.success = false;
            }, 2000);
          }
        })
        .catch((error) => {
          this.toggle();
          console.log(error);
          this.loader = false;
          this.error = true;
          if (error.response.status == 500) {
            this.errormsg = "Existing email address";
          } else {
            this.errormsg = Object.values(
              JSON.parse(error.request.response).data
            )[0][0];
          }
          setTimeout(() => {
            this.error = false;
          }, 2000);
        });
    },
    async create(files, description) {
      if (!files.length) {
        this.toggle();
        this.errormsg = "Please upload a file";
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000);
      } else {
        this.userData.append("description", description);
        files.forEach((file) => {
          this.userData.append("files", file);
        });
        this.convertData();
        this.register();
      }
    },
    convertData() {
      this.userData.append("name", this.user.name);
      this.userData.append("email", this.user.email);
      this.userData.append("password", this.user.password);
      this.userData.append(
        "password_confirmation",
        this.user.password_confirmation
      );
      this.userData.append("date_of_birth", this.user.date_of_birth);
      this.userData.append("subject_id", this.user.subject_id);
      this.userData.append("contact_no", this.user.contact_no);
      this.userData.append("country_id", this.user.country_id);
      this.userData.append("remember", this.user.remember);
    },
  },
};
</script>

<style scoped>
.title {
  /* font-family: 'Reckless Neue' !important; */
  font-family: "Reckless Neue" !important;
  font-weight: 900 !important;
  font-size: 25px !important;
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
  width: 300px;
  background-color: #ffa500;
  padding-block: 8px;
  cursor: pointer;
  align-self: center;
  font-size: 15px;
  margin: 0 auto;
  margin-top: 4%;
  font-weight: 500;
  border-radius: 8px;
  height: max-content;
}

.sing-in {
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  font-weight: 400;
}

.sing-in > span {
  cursor: pointer;
  color: #ffa500;
  font-weight: 500;
  margin-left: 5px;
}
</style>
