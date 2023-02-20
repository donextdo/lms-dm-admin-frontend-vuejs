<template>

  <div class="tutors">

    <v-alert
      class="alert"
      :value="success"
      type="success"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >Tutor deleted successfully</v-alert>

    <v-alert
      class="alert"
      :value="resetpw"
      type="success"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >Password reset successfully</v-alert>

    <v-alert
      class="alert"
      :value="error"
      type="error"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >{{errormsg }}</v-alert>
    <header class="header">
      <div class="th">
        <div class="td">
          <span>Tutor</span>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.50765 8H1.49235C1.21539 8.00043 0.943985 7.9164 0.70954 7.75763C0.475096 7.59886 0.287202 7.37185 0.167607 7.10287C0.0276073 6.78372 -0.0263148 6.42864 0.0119851 6.0781C0.0502851 5.72756 0.179267 5.39565 0.384232 5.12021L3.89188 0.544835C4.02954 0.373815 4.19972 0.236656 4.39091 0.142653C4.5821 0.04865 4.78982 0 5 0C5.21018 0 5.4179 0.04865 5.60909 0.142653C5.80028 0.236656 5.97046 0.373815 6.10812 0.544835L9.61577 5.12021C9.82073 5.39565 9.94972 5.72756 9.98802 6.0781C10.0263 6.42864 9.97239 6.78372 9.83239 7.10287C9.7128 7.37185 9.5249 7.59886 9.29046 7.75763C9.05602 7.9164 8.78461 8.00043 8.50765 8Z" fill="black"/>
          <path d="M1.49235 12H8.50765C8.78461 11.9996 9.05602 12.0836 9.29046 12.2424C9.5249 12.4011 9.7128 12.6282 9.83239 12.8971C9.97239 13.2163 10.0263 13.5714 9.98801 13.9219C9.94971 14.2724 9.82073 14.6043 9.61577 14.8798L6.10812 19.4552C5.97046 19.6262 5.80028 19.7633 5.60909 19.8573C5.4179 19.9514 5.21018 20 5 20C4.78982 20 4.5821 19.9514 4.39091 19.8573C4.19972 19.7633 4.02954 19.6262 3.89188 19.4552L0.384231 14.8798C0.179266 14.6043 0.0502844 14.2724 0.0119839 13.9219C-0.0263157 13.5714 0.0276079 13.2163 0.167608 12.8971C0.287203 12.6282 0.475097 12.4011 0.70954 12.2424C0.943985 12.0836 1.21539 11.9996 1.49235 12Z" fill="black"/>
          </svg>
        </div>
      </div>

      <div class="th">
        <div class="td">
          <span>Joined Date</span>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.50765 8H1.49235C1.21539 8.00043 0.943985 7.9164 0.70954 7.75763C0.475096 7.59886 0.287202 7.37185 0.167607 7.10287C0.0276073 6.78372 -0.0263148 6.42864 0.0119851 6.0781C0.0502851 5.72756 0.179267 5.39565 0.384232 5.12021L3.89188 0.544835C4.02954 0.373815 4.19972 0.236656 4.39091 0.142653C4.5821 0.04865 4.78982 0 5 0C5.21018 0 5.4179 0.04865 5.60909 0.142653C5.80028 0.236656 5.97046 0.373815 6.10812 0.544835L9.61577 5.12021C9.82073 5.39565 9.94972 5.72756 9.98802 6.0781C10.0263 6.42864 9.97239 6.78372 9.83239 7.10287C9.7128 7.37185 9.5249 7.59886 9.29046 7.75763C9.05602 7.9164 8.78461 8.00043 8.50765 8Z" fill="black"/>
          <path d="M1.49235 12H8.50765C8.78461 11.9996 9.05602 12.0836 9.29046 12.2424C9.5249 12.4011 9.7128 12.6282 9.83239 12.8971C9.97239 13.2163 10.0263 13.5714 9.98801 13.9219C9.94971 14.2724 9.82073 14.6043 9.61577 14.8798L6.10812 19.4552C5.97046 19.6262 5.80028 19.7633 5.60909 19.8573C5.4179 19.9514 5.21018 20 5 20C4.78982 20 4.5821 19.9514 4.39091 19.8573C4.19972 19.7633 4.02954 19.6262 3.89188 19.4552L0.384231 14.8798C0.179266 14.6043 0.0502844 14.2724 0.0119839 13.9219C-0.0263157 13.5714 0.0276079 13.2163 0.167608 12.8971C0.287203 12.6282 0.475097 12.4011 0.70954 12.2424C0.943985 12.0836 1.21539 11.9996 1.49235 12Z" fill="black"/>
          </svg>
        </div>
      </div>

      <div class="th">
        <div class="td">
          <span>Subject</span>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.50765 8H1.49235C1.21539 8.00043 0.943985 7.9164 0.70954 7.75763C0.475096 7.59886 0.287202 7.37185 0.167607 7.10287C0.0276073 6.78372 -0.0263148 6.42864 0.0119851 6.0781C0.0502851 5.72756 0.179267 5.39565 0.384232 5.12021L3.89188 0.544835C4.02954 0.373815 4.19972 0.236656 4.39091 0.142653C4.5821 0.04865 4.78982 0 5 0C5.21018 0 5.4179 0.04865 5.60909 0.142653C5.80028 0.236656 5.97046 0.373815 6.10812 0.544835L9.61577 5.12021C9.82073 5.39565 9.94972 5.72756 9.98802 6.0781C10.0263 6.42864 9.97239 6.78372 9.83239 7.10287C9.7128 7.37185 9.5249 7.59886 9.29046 7.75763C9.05602 7.9164 8.78461 8.00043 8.50765 8Z" fill="black"/>
          <path d="M1.49235 12H8.50765C8.78461 11.9996 9.05602 12.0836 9.29046 12.2424C9.5249 12.4011 9.7128 12.6282 9.83239 12.8971C9.97239 13.2163 10.0263 13.5714 9.98801 13.9219C9.94971 14.2724 9.82073 14.6043 9.61577 14.8798L6.10812 19.4552C5.97046 19.6262 5.80028 19.7633 5.60909 19.8573C5.4179 19.9514 5.21018 20 5 20C4.78982 20 4.5821 19.9514 4.39091 19.8573C4.19972 19.7633 4.02954 19.6262 3.89188 19.4552L0.384231 14.8798C0.179266 14.6043 0.0502844 14.2724 0.0119839 13.9219C-0.0263157 13.5714 0.0276079 13.2163 0.167608 12.8971C0.287203 12.6282 0.475097 12.4011 0.70954 12.2424C0.943985 12.0836 1.21539 11.9996 1.49235 12Z" fill="black"/>
          </svg>
        </div>
      </div>
      
      <div class="th">
        <ButtonVue text="New Tutor" @click="toggleForm" />
        </div>

    </header>

    <section class="hero d-flex flex-column">

      <TableRow type='tutor' @show-form="toggleForm" @delete="showDeleteDialog" @show-profile="toggleProfile" v-for="(tutor, index) in tutors.tutors" :item="tutor" :key="index"/>
 

    </section>

    <transition name="card">
      <ProfileCard v-if="profile" type="tutor" :info="tutor" @close-profile="toggleProfile"/>

      <CommonForm v-if="form" :editMode="editMode" @getTutors="get_tutors" :type="'tutor'" :info="tutor" @close-form="toggleForm" />

      <ConfirmationDialogVue v-if="showCD" 
        title="Rest Password" 
        :text="`Do you want to reset ${tutorName} password`" 
        btnText="Reset"
        type="tutor" 
        @discard="onDiscard1"
        @accept="onReset"
      />

      <ConfirmationDialogVue v-if="showdelete" 
        title="Delete Tutor" 
        :text="`Do you want remove ${tutorName}`" 
        btnText="Remove" 
        @discard="onDiscard2"
        @accept="onDelete"
      />
      <loader v-if="loader"/>
    </transition>
  </div>

</template>

<script>
import ConfirmationDialogVue from '@/components/shared/ConfirmationDialog.vue'
import TableRow from '@/components/shared/TableRow.vue'
import ProfileCard from '@/components/shared/ProfileCard.vue'
import CommonForm from '@/components/shared/CommonForm.vue'
import ButtonVue from '../../components/shared/Button.vue'
import loader from '@/components/shared/loader.vue'
import axios from 'axios';



export default {
    name: 'tutors-vue',

    components: {
      TableRow,
      ProfileCard,
      CommonForm,
      ConfirmationDialogVue,
      ButtonVue,
      loader
    },

    data () {
      return {
        tutors:{tutors:null},
        profile: false,
        form: false,
        showCD: false,
        showdelete: false,
        tutorName: null,
        success: false,
        error: false,
        resetpw: null,
        laptop: null,
        editMode: false,
        tutor: null,
        tutorId:null,
        loader:false,
        errormsg:null,
      }
    },

   async created() {
        window.addEventListener('resize', this.checkScreen)
      await  this.get_tutors()
        this.checkScreen()
    },

    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;

            if(this.windowWidth < 1400) {
                this.laptop = true
                return
            }
            else {
                this.laptop = false
            }
        },

        toggleProfile(item = null) {
          this.tutor = item
          this.profile = !this.profile
        },

        toggleForm(item = null, editMode = false) {
          this.form = !this.form
          this.tutor = item
          this.editMode = editMode
          console.log(this.tutor)
        },

      async  get_tutors() {
        this.loader=true
          await  axios
                .get(this.$hostname+"/api/admin/tutors")
                .then(response => {
                    if (response.status == 200) {
                      this.loader=false
                        this.tutors = response.data.data;
                    }

                })
                .catch(error => {
                  this.loader=false
                  this.error=true
                  setTimeout(() => {
                          this.error = false
                        }, 2000)
                    console.log(error);
                });
        },
        showResetDialog(name) {
          this.tutorName = name
          this.showCD = !this.showCD
        },

        onDiscard1() {
          this.showCD = !this.showCD
        },

        onReset() {
          this.resetpw = true

          setTimeout(() => {
            this.resetpw = false
          }, 2000)

          this.showCD = !this.showCD
        },

        showDeleteDialog(name,id) {
          this.tutorName = name
          this.tutorId = id
          this.showdelete = !this.showdelete
        },

        onDiscard2() {
          this.showdelete = !this.showdelete
        },

       async onDelete() {
        this.loader=true

         await axios
                .delete(this.$hostname+"/api/admin/tutor/"+this.tutorId)
                .then(response => {
                    if (response.status == 200) {
                      this.loader=false
                      this.success = true
                        setTimeout(() => {
                          this.success = false
                        }, 2000)
                        this.get_tutors()


                    }

                })
                .catch(error => {
                  this.loader=false
                  if(error.response.status==500)
                      {
                        this.errormsg='something went wrong'
                      }
                      else
                      {
                        this.errormsg=Object.values(JSON.parse(error.request.response).data)[0][0]
                      }
                  this.error=true
                  setTimeout(() => {
                          this.error = false
                        }, 2000)
                    console.log(error);
                });
        

          this.showdelete = !this.showdelete
        }

    },
}

</script>

<style scoped>

  .tutors {
    width: 100%;
    padding-left: 160px;
    padding-right: 180px;
    position: relative;
  }

  .alert {
    position: absolute;
    top: -2rem;
    z-index: 9999;
    right: 5rem;
  }

  .header {
    padding: 0 8px 0 30px;
    width: 100%;
    height: 150px;
    display: grid;
    grid-template-columns: 3fr 2fr 1.5fr 4fr;
  }

  .th {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .td {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    bottom: 25px;
    left: 0;
    opacity: 0.5;
  }


  .td > span {
    font-size: 16px;
    font-weight: 700;
    line-height: 32px;
  }

  .td > svg {
    height: 16px;
  }

  .btn {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: bold;
    position: absolute;
    bottom: 25px;
    right: 0;
  }

  .hero {
    overflow-y: scroll;
    height: 800px;
    gap: 35px;
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

  .card-enter-active,
  .card-leave-active {
    transition: opacity 0.3s ease-in;
  }

  .card-enter-from {
    opacity: 0;
  }

  .card-enter-to {
    opacity: 1;
  }

  .card-leave-to {
    opacity: 0;
  }

  @media (max-width: 1400px) {
    .tutors {
      padding-inline: 100px;
    }

    .alert {
      top: -2rem;
      right: 2rem;
    }

    .header {
      padding: 0 8px 0 20px;
      height: 100px;
      /* grid-template-columns: 3fr 2fr 1.2fr 3fr; */
    }

    .td {
      gap: 8px;
      bottom: 12px;
    }

    .td > span {
      font-size: 12px;
    }

    .td > svg {
      height: 12px;
    }

    .btn {
      font-size: 12px;
      bottom: 12px;
    }

    .hero {
      height: 500px;
      gap: 25px;
    }
  }
</style>