<template>
  <div class="classes">
    <header class="header d-flex align-end justify-space-between">
      <nav class="nav d-flex" >
        <span v-for="(item, index) in Subjects.data.subjects" :key="index" :data-subject="item.id" :aria-selected="currentSubject == item.id" class="link" @click="toggleSubject">{{ item.name }}</span>
      </nav>
      <div style="position:relative">
      <ButtonVue text="New Class" @click="toggleForm"/>
      </div>
    </header>

    <section class="hero mb-10">
      <ClassesContainer :classes="currentClasses"  @getSubjects="applyChanges" />
      <router-view />
    </section>
    <CommonForm v-if="form" :editMode="editMode" :type="'class'" :info="classes" @getSubjects="applyChanges" @close-form="toggleForm" />
     <loader v-if="loader"/>
  </div>
</template>

<script>
import loader from '@/components/shared/loader.vue'
import axios from 'axios'
import ButtonVue from '../../components/shared/Button.vue'
import ClassesContainer from '@/components/admin/classes/ClassesContainer.vue'
import CommonForm from '@/components/shared/CommonForm.vue'

export default {
    name: 'classes-vue',
    components: {
      ClassesContainer,
      CommonForm,
      ButtonVue,
      loader
    },
    data() {
      return {
          loader:false,
          changed:false,
          laptop: null,
          form:false,
          Subjects:{data:{subjects:[]}},
          currentSubject: null,
          showCD: false,
          showdelete: false,
          classes:null,
          currentClasses:{}
      }
    },

   async mounted() {
        window.addEventListener('resize', this.checkScreen)
      await  this.get_subjects()
        this.checkScreen()
    },

    methods: {
        toggleForm(item = null, editMode = false) {
          this.form = !this.form
          this.editMode = editMode
          console.log(item)
        },
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

       async get_subjects() {
        this.loader=true
          await  axios
                .get(this.$hostname+"/api/admin/subjects")
                .then(response => {
                    if (response.status == 200) {
                      this.loader=false

                        this.Subjects = response.data;
                        if(this.changed==false)
                        {
                          this.currentSubject=response.data.data.subjects[0].id
                        }
                        this.get_classes_for_subjects()
                    }

                })
                .catch(error => {
                  this.loader=false
                    console.log(error);
                });
        },
    
        applyChanges(){ 
         this.changed = true; 
         this.get_subjects();
       
        },
         
        toggleSubject(e) {
          this.currentSubject = e.target.dataset.subject
          this.get_classes_for_subjects()
        },
      async  get_classes_for_subjects() {
        this.loader=true
           await axios
                .get(this.$hostname+"/api/admin/classes/"+this.currentSubject)
                .then(response => {
                    if (response.status == 200) {   
                      this.loader=false
                        this.currentClasses = response.data.data.class1;
                        this.setTitle()
                        
                    }

                })
                .catch(error => {
                  this.loader=false
                    console.log(error);
                });
        },
        setTitle(){
            this.currentClasses.forEach(function(object) {
            object.title = "Grade "+object.grade.name+" "+object.subject.name+" "+object.country.name+"  students"
         })
        }

    },

    computed: {
        getRouterName() {
          return this.$route.name
        }
    }
}

</script>

<style scoped>

  .classes {
    width: 100%;
    padding-left: 70px;
    padding-right: 157px;
    z-index: -9999;
    overflow: hidden;
  }

  .header {
    height: 145px;
    width: 100%;
    border-bottom: 1px solid rgba(130, 130, 135, 0.3);
  }

  .btn {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 34px;
  }

  .nav {
    gap: 67px;
    margin-left: 56px;
  }

  .link {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 6px;
    position: relative;
  }

  .link::before {
    content: '';
    position: absolute;
    width: 100%;
    background-color: #FFA500;
    height: 3px;
    bottom: -6px;
    left: 1%;
    right: 10%;
    transform: scaleX(0);
    transition: transform .3s ease-in;
  }

  .link:hover {
    font-weight: bold;
  }

  .link:hover::before {
    transform: scaleX(1)
  }

  .link[aria-selected=true] {
    font-weight: bold
  }

  .link[aria-selected=true]::before {
    transform: scaleX(1);
  }

  .hero {
    padding-top: 61px;
    padding-left: 86px;
    overflow-y: scroll;
    height: 800px;
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

  @media (max-width: 1400px) {
    .classes {
      padding-left: 35px;
      padding-right: 95px;
    }

    .header {
      height: 100px;
    }

    .btn {
      font-size: 12px;
      margin-bottom: 22px;
    }

    .nav {
      gap: 30px;
      margin-left: 36px;
    }

    .link {
      font-size: 14px;
      line-height: 24px;
    }

    .hero {
      padding-top: 40px;
      padding-left: 60px;
      height: 500px;
    }
  }
</style>