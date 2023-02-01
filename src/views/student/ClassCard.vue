<template>
    <v-card style="margin-top:20px; padding-top:10px;" :height="laptop ? '160px' : '216px'" flat :width="laptop ? '280px' : '370px'" class="border rounded px-7 bg-light">
        <div style="margin-top:15px;margin-left:0px; "><svg width="16" height="14" style="position:absolute" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.499969 2.5C0.499969 2.5 1.62497 1 4.24997 1C6.87497 1 7.99997 2.5 7.99997 2.5V13C7.99997 13 6.87497 12.25 4.24997 12.25C1.62497 12.25 0.499969 13 0.499969 13V2.5ZM7.99997 2.5C7.99997 2.5 9.12497 1 11.75 1C14.375 1 15.5 2.5 15.5 2.5V13C15.5 13 14.375 12.25 11.75 12.25C9.12497 12.25 7.99997 13 7.99997 13V2.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </svg><p style="position:relative; bottom:5px;left:25px;">{{item.subject}}</p>
        </div>
        <div style="padding-top:10px;padding-left:10px; margin-top:20px;margin-left:10px;position:absolute;top:5px; left:100px">
        <div class="circle" style="position:relative;left:5px;" ></div>
        <svg width="14" style="position:relative ;left:5px;bottom:14px;"  height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.81803 0.494385C3.23075 0.494385 0.312317 3.41292 0.312317 7.0001C0.312317 10.5873 3.23085 13.5058 6.81803 13.5058C10.4052 13.5058 13.3237 10.5873 13.3237 7.0001C13.3237 3.41292 10.4052 0.494385 6.81803 0.494385ZM6.81803 12.2305C3.9341 12.2305 1.58768 9.88419 1.58768 7.0001C1.58768 4.11601 3.93394 1.76974 6.81803 1.76974C9.70212 1.76974 12.0484 4.11601 12.0484 7.0001C12.0484 9.88419 9.70212 12.2305 6.81803 12.2305Z" fill="#251605"/>
        </svg>

        <svg style="position:relative; left:-3px;bottom:18px; " width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.56105 3.89H1.45605V1.22378C1.45605 0.871548 1.17056 0.585938 0.818202 0.585938C0.465969 0.585938 0.180359 0.87142 0.180359 1.22378V4.52765C0.180359 4.87988 0.465841 5.16549 0.818202 5.16549H3.56105C3.91328 5.16549 4.19889 4.88001 4.19889 4.52765C4.19889 4.17541 3.91341 3.88993 3.56105 3.88993V3.89Z" fill="#251605"/>
        </svg><p style="position:relative; bottom:39px;left:25px;">{{item.time}}</p>
        </div>  
        <div style="padding-top:10px;padding-left:10px; margin-top:20px;margin-left:10px;position:absolute;top:5px;  left:100px">
        <div class="circle" style="position:relative;left:95px;" ></div>
        <svg width="13"  style="position:relative ;left:110px;bottom:14px;"  height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.3563 1.71222H10.52V1.24344C10.52 0.958438 10.2888 0.727295 10.0038 0.727295C9.71882 0.727295 9.48768 0.958438 9.48768 1.24344V1.71222H8.45538V1.24344C8.45538 0.958438 8.22423 0.727295 7.93923 0.727295C7.65422 0.727295 7.42308 0.958438 7.42308 1.24344V1.71222H6.39078V1.24344C6.39078 0.958438 6.15963 0.727295 5.87463 0.727295C5.58962 0.727295 5.35848 0.958438 5.35848 1.24344V1.71222H4.32618V1.24344C4.32618 0.958438 4.09504 0.727295 3.81003 0.727295C3.52502 0.727295 3.29388 0.958438 3.29388 1.24344V1.71222H2.45757C2.04712 1.71265 1.65352 1.87596 1.36318 2.16628C1.07285 2.45647 0.909672 2.85007 0.909119 3.26067V12.1591C0.909695 12.5697 1.07286 12.9633 1.36318 13.2535C1.65352 13.5438 2.04712 13.7071 2.45757 13.7075H11.3564C11.7668 13.7071 12.1604 13.5438 12.4507 13.2535C12.7411 12.9633 12.9043 12.5697 12.9048 12.1591V3.26067C12.9042 2.85007 12.7411 2.45651 12.4507 2.16628C12.1604 1.87595 11.7668 1.71262 11.3564 1.71222H11.3563ZM2.45786 2.74452H3.29403V3.21385C3.29403 3.49885 3.52517 3.73 3.81018 3.73C4.09518 3.73 4.32633 3.49885 4.32633 3.21385V2.74452H5.35862V3.21385C5.35862 3.49885 5.58977 3.73 5.87477 3.73C6.15978 3.73 6.39092 3.49885 6.39092 3.21385V2.74452H7.42322V3.21385C7.42322 3.49885 7.65437 3.73 7.93937 3.73C8.22438 3.73 8.45552 3.49885 8.45552 3.21385V2.74452H9.48782V3.21385C9.48782 3.49885 9.71897 3.73 10.004 3.73C10.289 3.73 10.5201 3.49885 10.5201 3.21385V2.74452H11.3564C11.6413 2.74466 11.8723 2.97566 11.8726 3.26067V4.62364H1.94149V3.26067C1.94178 2.97566 2.17278 2.74467 2.45764 2.74452H2.45786ZM11.3563 12.6752H2.45749C2.17263 12.6751 1.94164 12.4441 1.94134 12.1591V5.65597H11.8721V12.1591H11.8722C11.8719 12.4441 11.6409 12.6751 11.3561 12.6752H11.3563Z" fill="#251605"/>
        </svg>
        <p style="position:relative; bottom:39px;left:130px;">{{item.date}}</p>
        </div>
        <h4><b>{{item.title}}</b></h4>
        <p style="opacity:50%">Conducted by: {{item.tutor}}</p>
        <a @click="viewSession" style="color:#186847;position:absolute;bottom:40px; font-weight:bolder">View Details ></a>
        <button v-if="!state" style="background-color:#FFA500; color:white; padding:1%;right:25px;position:absolute;bottom:38px; " class="btn rounded-lg px-3">Attend Class
        </button>
        <button disabled v-if="state" style="background-color:#FFA500; opacity:0.5; position:absolute;right:25px;position:absolute;bottom:38px;  color:white;  padding:1%;float:right " class="btn rounded-lg px-3">Attend Class
        </button>
    </v-card>
</template>

<script>
export default {
    name:'upcoming-classes-card-vue',
    props: ['item'],
    created(){
        this.checkState()
      } ,
      data(){
        return{
          state:false,
          laptop:null,
        }
      },
    methods:{
      viewSession(){
              this.$router.push({name:'Recordings',params:{state:this.state,item:this.item}})
      }, 
      checkState(){
        var today=new Date()
        if(Date.parse(this.item.date + ' ' + this.item.time) < today)
                    {
                    this.state=true
                    }else 
                    {
                     this.state=false
                    }
      }
      
    }
}
</script>

<style scoped>

</style>