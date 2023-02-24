<template>
  <div>
    <div v-if="labelType == 'top'" class="expand">
      <div v-if="size == 'full'">
        <div v-if="label" class="row">
          <!-- <h3 style="margin-left: 14px;font-size: 20px;">{{ label }}</h3> -->
          <h3 class="input-label">{{ label }}</h3>
        </div>
        <div class="row">
          <input
            v-if="type != 'select'"
            class="custom"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
          />
          <!---->
          <!-- <select
            @change="$emit('update:modelValue', $event.target.value)"
            v-else
            class="custom"
          >
            <option
              v-for="(item, index) in items"
              :value="item.id"
              :key="index"
            >
              {{ item.name }}
            </option>
          </select> -->
          <!---->
           <div v-else style="position:relative;width:100% " >
               <div class="griditfull "  @click="shift">
                 <div v-if="initial" class="item" >{{initial}}</div>
                 <div ref="img" style="color:#FFA500" class="item">&#9660;</div>
               </div>  
               <div v-if="user" ref="outer" class="outer">
                  <div v-for="(item, index) in items" :key="index"
                  @click="apply(item)"  class="rows rows-select">{{item.user.name}}</div>   
               </div>
               <div v-else ref="outer" class="outer">
                  <div v-for="(item, index) in items" :key="index"
                  @click="apply(item)"  class="rows rows-select"><div>{{item.name}}</div></div>   
               </div>
          </div>
           <!---->

        </div>
      </div>
      <div v-else></div>
    </div>
    <div v-else class="expand">
      <div v-if="size == 'full'" class="row rows">
        <div v-if="label" class="col-2 center">
          <h3 class="center">{{ label }}</h3>
        </div>
        <div class="col-10">
          <input
            v-if="type != 'textArea'"
            class="c"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @change="$emit('change')"
            v-bind="$attrs"
          />
          <textarea
            v-else
            rows="5"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @change="$emit('change')"
            v-bind="$attrs"
            class="c3"
            cols="50"
          >
          </textarea>
        </div>
      </div>
      <div v-else>
        <div class="rows row">
          <div v-if="label1" class="col-2">
            <h3>{{ label1 }}</h3>
          </div>
          <div class="col-3">
            <input
              v-if="type1 != 'textArea'"
              style="padding-left: 10%"
              class="c"
              :type="type1"
              :value="modelValue1"
              @input="$emit('update:modelValue1', $event.target.value)"
              @change="$emit('change')"
              v-bind="$attrs"
            />
            <textarea
              v-else
              rows="8"
              :value="modelValue"
              @input="$emit('update:modelValue1', $event.target.value)"
              @change="$emit('change')"
              v-bind="$attrs"
              class="c3"
              cols="50"
            >
            </textarea>
          </div>
          <div v-if="label2" style="margin-left: 5%" class="col-2">
            <h3 class="center">{{ label2 }}</h3>
          </div>
          <div class="col-3">
            <input
              v-if="type2 != 'textArea'"
              style="padding-left: 10%"
              class="c"
              :type="type2"
              :value="modelValue2"
              @input="$emit('update:modelValue2', $event.target.value)"
              @change="$emit('change')"
              v-bind="$attrs"
            />
            <textarea
              v-else
              rows="8"
              :value="modelValue"
              @input="$emit('update:modelValue2', $event.target.value)"
              @change="$emit('change')"
              v-bind="$attrs"
              class="c3"
              cols="50"
            >
            </textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  mounted() {
    this.initialValue
      ? this.user
        ? (this.initial = this.initialValue.user.name)
        : (this.initial = this.initialValue.name)
      : null;
    this.initialValue
      ? this.$emit("update:modelValue", this.initialValue.id)
      : null;
  },
  data() {
    return {
      initial: null,
    };
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: [String, Boolean],
      default: false,
    },
    label1: {
      type: [String, Boolean],
      default: false,
    },
    label2: {
      type: [String, Boolean],
      default: false,
    },
    labelType: { type: String, default: "top" },
    type: {
      type: String,
      default: "text",
    },
    type1: {
      type: String,
      default: "text",
    },
    type2: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "full",
    },
    modelValue1: {
      type: [Date, String],
      default: "",
    },
    modelValue2: {
      type: [Date, String],
      default: "",
    },
    items: {
      type: Array,
      default: null,
    },
    initialValue: {
      type: Object,
      default: null,
    },
    changedOr:{
      type:Number,
      default:0,
    }
    
  },
  methods:{
    shift(){
    if(   this.$refs.outer.style.display=='block')
    {
      this.$refs.outer.style.display='none'
      this.$refs.img.removeAttribute("class", "rotated-image");
      this.$refs.img.setAttribute("class", "item");



    } 
    else
    {
      this.$refs.img.setAttribute("class", "rotated-image");
      this.$refs.outer.style.display='block'

    } 
   },
   hide(){
      this.$refs.outer.style.display='none'
      this.$refs.img.removeAttribute("class", "rotated-image");
      this.$refs.img.setAttribute("class", "item");
   },
   apply(item)
   {
     this.shift() 
     this.user  ? this.initial = item.user.name : this.initial = item.name
     this.$emit('update:modelValue', item.id)
   },
  },

  watch: {
    changedOr: {
      immediate:true,
          handler(){     
          },
          deep: true
        }
      },

};
</script>
<style scoped>
.custom.v-text-field > .input__control > .input__slot:before {
  border-style: none;
}
.custom.v-text-field > .input__control > .input__slot:after {
  border-style: none;
}
.custom.v-file-input > .input__control > .input__slot:before {
  border-style: none;
}
.custom.v-file-input > .input__control > .input__slot:after {
  border-style: none;
}

.input-label {
  margin-left: 14px;
  font-style: normal;
  /* font-family: "Axiforma" !important; */
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  margin-top: 15px;
  margin-bottom: 3px;
  padding-right: 20px;
  color: #251605;
}
.form-control {
    width: 100%;
    gap: 12px;
    background-color:#FEF3EC;
    height:45px;
    color:rgba(100,100,100,0.5);
    padding-left:5%;
    font-size: 12px !important;
    border-radius: var(--brd,5px);
  }
.custom {
  background-color: var(--bgcol, white);
  height: 40px;
  margin-top: 1%;
  margin-bottom: 3%;
  margin-left: 14px;
  padding-left: 3%;
  padding-right:3%;
  width: 100%;
  border: none;
  font-size: 13px !important;
  border-radius: 5px;
  color: #251605;
  cursor: pointer;

  /* opacity:0.5; */
}
.outer{
  background-color: var(--bgcol, white);
      position:absolute; 
      font-size:13px;
      border-left:1px solid white;
      border-right:1px solid white ;
       border-bottom: 1px solid white; 
       z-index: 99;
       display:none;
       width:100%;
       max-height:230px;
       overflow-x:none;
  margin-bottom: 3%;
  margin-left: 14px;
  padding-left: 0px;
  padding-right:3%;
  width: 97%;
   }
::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: invert(78%) sepia(47%) saturate(4973%) hue-rotate(360deg) brightness(102%) contrast(103%);
}
textarea:focus,
select:focus,
input:focus {
  outline: none;
}
.expand {
  width: 100%;
}
.c {
  /* opacity:0.5;    */
  width: 80%;
  height: 45px;
  color: #251605;
  background-color: var(--bgcol, white);
  margin-right: 10%;
  padding-left: 3%;
  padding-right: 20%;
}
.rows {
  margin-left: 3%;
  padding-top: 0%;
  padding-top: 1%;
  width: auto;
  height: auto;
}
.rows-select:hover{
  background-color:#FFA500;
  color: white;
  width:103%;
  margin:0;
  padding:none;
  cursor: pointer;

}
.rows-select:hover> div{
 
  padding-left:3%;
  cursor: pointer;

}
.rotated::after {
  transform: rotate(180deg);
}

.rotated-image {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
          color:black;

}
.item{
      color:black;
      padding-top:10px;
      font-size:13px;
   }
.c2 {
  opacity: 0.5;
  width: 80%;
  color: #251605;
  background-color: var(--bgcol, white);
  margin-right: 10%;
  padding-left: 3%;
  padding-right: 20%;
  
}
.c3 {
  padding-top: 1%;
  /* opacity:0.5;    */
  width: 80%;
  color: #251605;
  background-color: var(--bgcol, white);
  margin-right: 10%;
  padding-left: 3%;
  padding-right: 20%;
  cursor: pointer;

}
.griditfull{
  background-color: var(--bgcol, white);
  height: 40px;
  margin-top: 1%;
  margin-left: 14px;
  padding-left: 3%;
  padding-right:3%;
  width: 97%;
  border: none;
  border-radius: 5px;
  color: #251605;
  display: grid;
  grid-template-columns:96% 4%; 
  cursor: pointer;
}
</style>
