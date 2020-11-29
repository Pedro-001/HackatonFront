<template>
  <div class="flex-col items-center content-center">
    <h1 class="text-gray-700 text-2xl uppercase"> fotografia </h1>
       <div>
          <input  type="file" multiple  @change="onFileSelected1" />
          <button @click="onUpload1(fotografia)">Upload</button>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Pxfotografia",

data(){
    return{
      selectedFile1: null,
      fotografia: []
    }
  },
  methods:{
    onFileSelected1(event){
      console.log("==================================");
      console.log(JSON.stringify(event.target));
      this.selectedFile1 = event.target.files
      for (let index = 0; index < this.selectedFile1.length; index++) {
        const element = this.selectedFile1[index];
        this.fotografia.push(element);
      }
      console.log("==================================");
    },
    onUpload1(fotografia){
      for (var i=0; i<fotografia.length; i++){
          const element = this.fotografia[i];
          const formData = new FormData();          
          formData.append('image', element,element.name)
          axios.post('http://localhost:3000/api/fotografia/',
          formData)
          .then(res=>{
            if (res.data.predictions[0].probability > 0.95) {
              console.log(res.data.predictions[0].probability)
              console.log(res.data.predictions[0].tagName)
              
              }
          })

      }


    }
  }

};
</script>

