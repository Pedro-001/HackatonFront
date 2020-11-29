<template>

  <div class="flex-col items-center content-center">
    <h1 class="text-gray-700 text-2xl uppercase"> fotografia </h1>
       <div>
          <input id="files" ref="files"  type="file" multiple  @change="onFileSelected1" />
          <button @click="onUpload1()">Upload</button>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Pxfotografia",

data(){
    return{
     files:'',
    }
  },
  methods:{
    onFileSelected1(){
      console.log("==================================");
        this.files = this.$refs.files.files;
      console.log("==================================");
    },
    onUpload1( ){
        let formData = new FormData();
        console.log(window.location.href); // path is /post
      for (var i=0; i<this.files.length; i++){
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
      }
console.log(JSON.stringify(formData));

          axios.post('http://localhost:3000/api/fotografia/',
          formData,      
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
          .then(res=>{
              console.log(res);
})


    }
  }

};
</script>

