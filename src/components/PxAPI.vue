<template>
  <div class="flex-col items-center content-center">
    <h1 class="text-gray-700 text-2xl uppercase">
      Ingresa las imagenes para analizar
      </h1>
    
        <div>
          <input  type="file" multiple  @change="onFileSelected" />
          <button @click="onUpload(images)">Upload</button>
        </div>
           
    <router-link
      class="mt-5 text-xl text-green-600 hover:underline content-center"
      to="/"
    >Volver a la página de Inicio
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "PxAPI",

data(){
    return{
      selectedFile: null,
      images: []
    }
  },
  methods:{
    onFileSelected(event){
      console.log("==================================");
      console.log(JSON.stringify(event.target));
      this.selectedFile = event.target.files
      for (let index = 0; index < this.selectedFile.length; index++) {
        const element = this.selectedFile[index];
        this.images.push(element);
      }
      console.log("==================================");
    },
    onUpload(images){
      for (var i=0; i<images.length; i++){
          const element = this.images[i];
          const formData = new FormData();          
          formData.append('image', element,element.name)
          axios.post('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0cfacc40-5db4-468e-aa75-ce5c9e5b078c/detect/iterations/Hackathon%20modelo%201/image',
          formData,{
            headers: {
              'Prediction-Key': 'd5255a630d514403811ceab4988dcc4f',
              'Content-Type' : 'application/octet-stream'
            }
          })
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

