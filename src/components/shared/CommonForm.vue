<template>
  <div class="overlay">
    <v-alert
      class="alert"
      :value="success"
      type="success"
      border="left"
      width="30vw"
      prominent
      transition="scroll-x-reverse-transition"
    >
      {{ type }} {{ method }} successfully</v-alert
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

    <v-card
      :height="laptop ? '515px' : '770px'"
      :width="laptop ? '400px' : '620px'"
      class="d-flex flex-column align-center card"
    >
      <h4 class="title">
        {{
          editMode
            ? "Edit " + type + " details"
            : "Add new " + type
        }}
      </h4>
      <div class="rowsingle" v-if="type !== 'class'">
        <ModelTextInputVue
          v-if="type !== 'class'"
          :placeholder="'Mention the name of the ' + type"
          type="text"
          :label="type[0].toUpperCase() + type.slice(1) + ' name'"
          :modelValue="member.name"
          @update:modelValue="(newValue) => (member.name = newValue)"
        />
      </div>
      <div class="rowsingle" v-if="type !== 'student'">
        <div v-if="type !== 'student'" class="form-control">
          <ModelTextInputVue
            v-if="subjects"
            :full="true"
            :placeholder="'Mention the name of the ' + type"
            :initialValue="
              temporySubject ? temporySubject : subjects.subjects[0]
            "
            type="select"
            :items="subjects.subjects"
            label="Subject taught"
            :modelValue="member.subject_id"
            @update:modelValue="(newValue) => (member.subject_id = newValue)"
          />
        </div>
      </div>
      <div class="rows" v-if="type === 'class'">
        <div v-if="type === 'class'" class="form-control">
          <ModelTextInputVue
            v-if="grades"
            :initialValue="temporyGrade ? temporyGrade : grades.grades[0]"
            type="select"
            :label="'Select Grade'"
            :items="grades.grades"
            :modelValue="member.grade_id"
            @update:modelValue="(newValue) => (member.grade_id = newValue)"
          />
        </div>
        <div v-if="type === 'class'" class="form-control">
          <ModelTextInputVue
            v-if="tutors"
            :initialValue="temporyTutor ? temporyTutor : tutors.tutors[0]"
            type="select"
            :label="'Select Tutor'"
            :user="true"
            :items="tutors.tutors"
            :modelValue="member.tutor_id"
            @update:modelValue="(newValue) => (member.tutor_id = newValue)"
          />
        </div>
      </div>
      <div class="rows" v-if="type === 'class'">
        <div v-if="type === 'class'" class="form-control">
          <ModelTextInputVue
            v-if="countries"
            :initialValue="
              temporyCountry ? temporyCountry : countries.countries[0]
            "
            type="select"
            :label="'Select Country'"
            :items="countries.countries"
            :modelValue="member.country_id"
            @update:modelValue="(newValue) => (member.country_id = newValue)"
          />
        </div>
        <div v-if="type === 'class'" class="form-control-price">
          <ModelTextInputVue
            placeholder="Mention the price"
            type="text"
            style="--brd: 5px 0px 0px 5px"
            label=" Price"
            :modelValue="member.price"
            @update:modelValue="(newValue) => (member.price = newValue)"
          />

          <label
            style="
              margin-top: 24px;
              border-radius: 0px 5px 5px 0px;
              position: relative;
            "
            class="label"
            ><span
              style="
                position: relative;
                background-color: #ffa500;
                padding-top: 1px;
                padding-bottom: 1px;
                padding-left: 0;
                color: white;
                top: 6px;
                font-size: 16px;
              "
              >{{ currency }}</span
            >
          </label>
        </div>
      </div>
      <div class="rows" v-if="type === 'class'">
        <div class="form-control" v-if="type === 'class'">
          <ModelTextInputVue
            v-if="day_of_week"
            :initialValue="temporyDate ? temporyDate : day_of_week[0]"
            type="select"
            :label="'Select Date'"
            :items="day_of_week"
            :modelValue="member.day_of_week"
            @update:modelValue="(newValue) => (member.day_of_week = newValue)"
          />
        </div>
        <div class="form-control" v-if="type === 'class'">
          <ModelTextInputVue
            placeholder="Time"
            type="time"
            label=" Time"
            :modelValue="member.time"
            @update:modelValue="(newValue) => (member.time = newValue)"
          />
        </div>
      </div>
      <div class="rowsingle" v-if="type !== 'class'">
        <div class="form-control" v-if="type !== 'class'">
          <ModelTextInputVue
          :placeholder="'Mention the email of the ' + type"
            type="text"
            label=" Email"
            :modelValue="member.email"
            @update:modelValue="(newValue) => (member.email = newValue)"
          />
        </div>
      </div>
      <div class="rowsingle" v-if="type !== 'class'">
        <div class="form-control" v-if="type !== 'class'">
          <ModelTextInputVue
            type="text"
            label=" Contact Number"
            :placeholder="'Mention the number of the ' + type"
            :modelValue="member.contact_no"
            @update:modelValue="(newValue) => (member.contact_no = newValue)"
          />
        </div>
      </div>

      <div class="btn-container d-flex align-center" v-if="editMode">
        <ButtonVue text="Save Changes" @click="update_member()" />
      </div>
      <ButtonVue
        v-else
        :text="'Add ' + type[0].toUpperCase() + type.slice(1)"
        :modal="true"
        @click="add_member()"
      />

      <span class="close-btn" @click="close">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8498 0.869641L14.8498 0.869617C14.384 0.403882 13.6288 0.403915 13.1629 0.869594L13.1629 0.869618L7.71908 6.31344L2.27525 0.869618C1.80952 0.403882 1.05428 0.403915 0.588391 0.869594L0.588344 0.869641C0.122653 1.33554 0.122653 2.09058 0.588344 2.55648L0.588368 2.5565L6.03219 8.00033L0.588368 13.4441C0.122632 13.9099 0.122665 14.6651 0.588344 15.131L0.588368 15.131C1.0541 15.5968 1.80934 15.5967 2.27523 15.1311L2.27525 15.131L7.71908 9.68721L13.1629 15.131C13.6286 15.5967 14.3839 15.597 14.8498 15.131C15.3155 14.6653 15.3155 13.9101 14.8498 13.4442L14.8498 13.4441L9.40596 8.00033L14.8498 2.5565C15.3155 2.09077 15.3155 1.33553 14.8498 0.869641Z"
            fill="#251605"
            stroke="#251605"
            stroke-width="0.293333"
          />
        </svg>
      </span>

      <!-- {{ info.name }} -->
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import ModelTextInputVue from "./ModelTextInput.vue";
import { Form } from "vform";
import ButtonVue from "./Button.vue";
window.Form = Form;

export default {
  name: "commonform-vue",
  components: {
    ModelTextInputVue,
    ButtonVue,
  },

  props: ["info", "editMode", "type"],

  data() {
    return {
      errormsg: null,
      subjects: null,
      grades: null,
      laptop: null,
      temporyDate: null,
      temporySubject: null,
      temporyCountry: null,
      temporyTutor: null,
      temporyGrade: null,
      success: false,
      error: false,
      tutors: null,
      currency: null,
      countries: null,
      day_of_week: [
        {
          name: "Monday",
          id: 1,
        },
        {
          name: "Tuesday",
          id: 2,
        },
        {
          name: "Wednesday",
          id: 3,
        },
        {
          name: "Thursday",
          id: 4,
        },
        {
          name: "Friday",
          id: 5,
        },
        {
          name: "Saturday",
          id: 6,
        },
        {
          name: "Sunday",
          id: 7,
        },
      ],

      method: "created",

      member: new Form({
        name: "",
        subject_id: "",
        email: "",
        contact_no: "",
        tutor_id: "",
        country_id: "",
        grade_id: "",
        day_of_week: "1",
        price: "",
        time: "",
        timeZone: "",
      }),
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    this.get_subjects();
    if (this.type == "class") {
      this.get_grades();
      this.get_tutors();
      this.get_countries();
    }
    if (this.editMode) {
      this.setInfo();
      this.toLocalTime();
    }
  },
  watch: {
    member: {
      handler(val) {
        console.log(val);
        this.setCurrency();
      },
      deep: true,
    },
  },
  methods: {
    setTimeReal() {
      let time = this.member.time;
      let str = time.substring(time.length - 2, time.length);
      if (str == "PM") {
        time = time.substring(0, time.length - 2) + 12;
      }
      let day = new Date("1111-11-11 " + time + ":00");
      this.member.time = day.toISOString();
    },
    toLocalTime() {
      let day = new Date(this.member.time).toLocaleDateString();
      let time = day.getTime();
      console.log(time);
    },
    setInfo() {
      if (this.type !== "class") {
        this.member.name = this.info.user ? this.info.user.name : null;
        if (this.type == "tutor") {
          //this.temporySubject=this.info.subject
          //this.member.subject_id=this.info.subject.id
        }

        this.member.contact_no = this.info.user
          ? this.info.user.contact_no
          : null;
        this.member.email = this.info.user ? this.info.user.email : null;
      } else {
        this.member.subject_id = this.info.subject.id;
        // this.tempory_subject_id=this.info.subject.id
        // this.member.country_id=this.info.country.name
        // this.tempory_country_id=this.info.country.id
        this.member.tutor_id = this.info.tutor;
        //this.tempory_tutor_id=this.info.tutor.id
        this.temporySubject = this.info.subject;
        this.temporyTutor = this.info.tutor;
        this.temporyGrade = this.info.grade;
        this.temporyCountry = this.info.country;
        this.member.grade_id = this.info.grade;
        // this.tempory_grade_id=this.info.grade.id
        this.member.price = this.info.price;
        this.member.time = this.info.session.time;
        this.temporyDate = this.day_of_week[this.info.day_of_week - 1];
        this.member.day_of_week = this.day_of_week[this.info.day_of_week - 1];
      }
    },

    setCurrency() {
      this.countries.countries.filter((country) => {
        if (country.id == this.member.country_id) {
          this.currency = country.currency;
        }
      });
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth < 1600) {
        this.laptop = true;
        return;
      } else {
        this.laptop = false;
      }
    },

    close() {
      this.$emit("close-form");
    },
    validate() {
      if (isNaN(this.member.grade_id)) {
        this.member.grade_id = parseInt(this.member.grade_id.id);
      }
      if (isNaN(this.member.subject_id)) {
        this.member.subject_id = parseInt(this.member.subject_id);
      }
      if (isNaN(this.member.country_id)) {
        this.member.country_id = parseInt(this.member.country_id.id);
      }
      if (isNaN(this.member.tutor_id)) {
        this.member.tutor_id = parseInt(this.member.tutor_id.id);
      }
      if (isNaN(this.member.day_of_week)) {
        this.member.day_of_week = parseInt(this.member.day_of_week.id);
      }
      if (this.member.price) {
        this.member.price = parseFloat(this.member.price);
      }
    },
    async add_member() {
      //  this.setTimeReal()
      this.validate();
      await this.member
        .post(this.$hostname + "/api/admin/" + this.type)
        .then((response) => {
          this.close();
          this.member.reset(); //reset the form data after submit
          if (response.status == 200) {
            if (this.type == "class") {
              this.$emit("getSubjects");
            } else {
              if (this.type == "tutor") {
                this.$emit("getTutors");
              } else {
                this.$emit("getStudents");
              }
            }
            this.method = "created";
            this.success = true;
            setTimeout(() => {
              this.success = false;
            }, 2000);
          }
        })

        .catch((error) => {
          console.log(error);
          if (this.type == "class") {
            this.$emit("getSubjects");
          } else {
            if (this.type == "tutor") {
              this.$emit("getTutors");
            } else {
              this.$emit("getStudents");
            }
          }
          console.log(error);
          if (error.response.status == 500) {
            this.errormsg = "something went wrong";
          } else {
            this.errormsg = Object.values(
              JSON.parse(error.request.response).data
            )[0][0];
          }
          this.error = true;
        });
    },

    async update_member() {
      if (this.type == "tutor" && isNaN(this.member.subject_id)) {
        this.member.subject_id = this.temporySubject.id;
      }
      if (this.type == "class") {
        this.validate();
        if (isNaN(this.member.subject_id)) {
          this.member.subject_id = this.temporySubject.id;
        }
        if (isNaN(this.member.grade_id)) {
          this.member.grade_id = this.temporyGrade.id;
        }
        if (isNaN(this.member.country_id)) {
          this.member.country_id = this.temporyCountry.id;
        }
        if (isNaN(this.member.tutor_id)) {
          this.member.tutor_id = this.temporyTutor.id;
        }
      }
      await this.member
        .put(this.$hostname + "/api/admin/" + this.type + "/" + this.info.id)
        .then((response) => {
          this.close();
          if (response.status == 200) {
            if (this.type == "class") {
              this.$emit("getSubjects");
            } else {
              if (this.type == "tutor") {
                this.$emit("getTutors");
              } else {
                this.$emit("getStudents");
              }
            }
            this.method = "updated";
            this.success = true;

            setTimeout(() => {
              this.success = false;
            }, 2000);
          }
          this.member.reset();
          //reset the form data after submit
        })

        .catch((error) => {
          this.close();
          if (this.type == "class") {
            this.$emit("getSubjects");
          } else {
            if (this.type == "tutor") {
              this.$emit("getTutors");
            } else {
              this.$emit("getStudents");
            }
          }
          this.error = true;
          console.log(error);
        });
    },
    async get_subjects() {
      await axios
        .get(this.$hostname + "/api/admin/subjects")
        .then((response) => {
          if (response.status == 200) {
            this.subjects = response.data.data;
            this.member.subject_id = this.subjects.subjects[0].id;
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        });
    },

    async get_grades() {
      await axios
        .get(this.$hostname + "/api/admin/grades")
        .then((response) => {
          if (response.status == 200) {
            this.grades = response.data.data;
            this.member.grade_id = this.grades.grades[0].id;
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        });
    },
    async get_tutors() {
      await axios
        .get(this.$hostname + "/api/admin/tutors")
        .then((response) => {
          if (response.status == 200) {
            this.tutors = response.data.data;
            this.member.tutor_id = this.tutors.tutors[0]
              ? this.tutors.tutors[0].id
              : null;
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        });
    },

    async get_countries() {
      await axios
        .get(this.$hostname + "/api/countries")
        .then((response) => {
          if (response.status == 200) {
            this.countries = response.data.data;
            this.member.country_id = this.countries.countries[0].id;
            this.setCurrency();
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        });
    },
  },
};
</script>

<style scoped>
.inputtype {
  height: 45px;
  background-color: #fef3ec;
  outline: 0px !important;
  box-shadow: none !important;
}
.label {
  color: white;

  background: #fef3ec;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}
.rows {
  width: 95%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  margin-right: 4%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.rowsingle {
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  margin: 0;
  padding: 0%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.p {
  margin-top: 5px;
}
.overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.2);
}

.alert {
  position: absolute;
  top: -2rem;
  z-index: 9999;
  right: 5rem;
}

.card {
  position: relative;
  padding-inline: 55px;
  padding-top: 74px;
  padding-bottom: 62px;
}

.title {
  font-size: 32px !important;
  font-weight: bold;
  line-height: 32px;
  color: #251605;
  margin-bottom: 38px;
}

.form-control-price {
  display: grid;
  grid-template-columns: 80% 20%;
  width: 100%;
  gap: 0px;
}
.form-control {
  width: 100%;
  gap: 12px;
}

.label {
  font-size: 18px !important;
  font-weight: 500;
  line-height: 32px;
  color: #251605;
  margin: 0;
}

.v-text-field {
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 18px;
}
input {
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 18px;
}

.btn-container {
  margin-top: auto;
  gap: 1rem;
}

.btn-del {
  color: #fe3f49;
  text-decoration: underline;
  line-height: 32px;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
}

@media (max-width: 1600px) {
  .card {
    padding-inline: 30px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .title {
    font-size: 18px !important;
    margin-bottom: 20px;
  }

  .form-control {
    gap: 4px;
  }

  .label {
    font-size: 12px !important;
  }

  .v-text-field {
    font-size: 12px;
  }

  .btn {
    font-size: 12px !important;
  }

  .close-btn {
    top: 15px;
    right: 15px;
  }
}
</style>
