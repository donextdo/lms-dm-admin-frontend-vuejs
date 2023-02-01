<template>
  <div class="dancing d-flex flex-column">
    <CardRow v-for="(item, index) in classes" :item="item" :key="index"  @show-form="toggleForm" @delete="showDeleteDialog"/>
 
    <transition name="card">

      <CommonForm v-if="form" :editMode="editMode" :type="'classes'" :info="classes" @close-form="toggleForm" />


      <ConfirmationDialogVue v-if="showdelete" 
        title="Delete Class" 
        :text="`Do you want remove this class`" 
        btnText="Remove" 
        @discard="onDiscard2"
        @accept="onDelete"
      />
    </transition>
    <CommonForm v-if="form" :editMode="editMode" :type="'class'" :info="class1" @close-form="toggleForm" @getSubjects="getit" />
 </div>
</template>

<script>
import CardRow from '@/components/shared/CardRow.vue';
import CommonForm from '@/components/shared/CommonForm.vue'
import axios from 'axios'
import ConfirmationDialogVue from '@/components/shared/ConfirmationDialog.vue'

export default {
    name: 'classescontainer-vue',
    
    props: ['classes'],

    data() {
      return {
        form: false,
    showCD: false,
    showdelete: false,
        class1:null,
       editMode:false,
       classid:null
      }
    },

    components: {
    CardRow,
    ConfirmationDialogVue,
    CommonForm
},
    methods:{
        toggleForm(item = null, editMode = false) {
          this.form = !this.form
          this.class1 = item
          this.editMode = editMode
          console.log(editMode) 
         
        },
        showDeleteDialog(id) {
          this.classid = id
          this.showdelete = !this.showdelete
        },

        onDiscard2() {
          this.showdelete = !this.showdelete
        },
        getit()
        {
         this.$emit('getSubjects')
        },

        onDelete() {
          axios
                .delete(this.$hostname+"/api/admin/class/"+this.classid)
                .then(response => {
                    if (response.status == 200) {
                      this.success = true
                        setTimeout(() => {
                          this.success = false
                        }, 2000)
                        this.$emit('getSubjects')

                    }

                })
                .catch(error => {this.error=true
                  setTimeout(() => {
                          this.error = false
                        }, 2000)
                    console.log(error);
                });
        

          this.showdelete = !this.showdelete
        }
    }

}
</script>

<style scoped>
  .dancing {
    gap: 35px;
  }

  @media (max-width: 1400px) {
    .dancing {
      gap: 25px;
    }
  }

</style>


