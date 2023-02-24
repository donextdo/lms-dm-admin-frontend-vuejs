<template >
    <div class="overlay">
        <div class="loader"></div>

    </div>

</template>
<script>
export default{
name:'loader-vue',

}
</script>
<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #FFA500;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin-top: calc( 50vh - 60px );
  margin-left:  calc( 50vw - 60px );
  
}
.overlay{
    width:100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.2);
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>