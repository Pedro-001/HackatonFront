<template>
  <div class="flex-col items-center content-center">
    <h1 class="text-gray-700 text-2xl uppercase">
      Ingresa las imagenes para analizar
      </h1>
    
        <div>
          <input  type="file"  @change="onFileSelected" />
          <button @click="onUpload"> Upload</button>
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
      selectedFile: null
    }
  },
  methods:{
    onFileSelected(event){
      console.log("==================================");
      console.log(JSON.stringify(event.target));

      this.selectedFile = event.target.files[0]
            console.log("==================================");

    },
    onUpload(){
      const formData = new FormData();
      formData.append('image', this.selectedFile,this.selectedFile.name)
      axios.post('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0cfacc40-5db4-468e-aa75-ce5c9e5b078c/detect/iterations/Hackathon%20modelo%201/image',
      formData,{
        headers: {
          'Prediction-Key': 'd5255a630d514403811ceab4988dcc4f',
          'Content-Type' : 'application/octet-stream'
        }
      })
      .then(res=>{
        console.log(res)
      })
    }
  }

};
</script>

