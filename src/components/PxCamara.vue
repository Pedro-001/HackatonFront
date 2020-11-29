<template>
  <div class="flex-col items-center content-center">
      <h1 class="text-gray-700 text-2xl uppercase">Ingresa  una Camara </h1>            
            <form @submit="PostCamara" method="post">
            
                <input type="text" name="marca" placeholder="Nombre provincia" v-model="camaraPosts.marca"> <br><br>
                <input type="text" name="modelo" placeholder="Nombre modelo" v-model="camaraPosts.modelo"> <br><br>
                <label for="start">dia_colocacion:</label>
                <input type="date" name="dia_colocacion" placeholder="dia_colocacion" v-model="camaraPosts.dia_colocacion"> <br><br>
                <label for="start">dia remocion:</label>
                <input type="date" name="dia_remocion" placeholder="dia_remocion" v-model="camaraPosts.dia_remocion"> <br><br>
                <input type="text" name="latitud" placeholder="latitud" v-model="camaraPosts.latitud"> <br><br>
                <input type="text" name="longitud" placeholder="longitud" v-model="camaraPosts.longitud"> <br><br>
                <input type="text" name="altitud" placeholder="altitud" v-model="camaraPosts.altitud"> <br><br>
                <input type="text" name="vegetacion" placeholder="vegetacion" v-model="camaraPosts.vegetacion"> <br><br>
                <input type="text" name="collector" placeholder="collector" v-model="camaraPosts.collector"> <br><br>
                
                <button type = "submit"> Aceptar </button>

            
            </form>
          
          
        
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: "PxCamara",

data(){
    return{
      camaraPosts:{
        marca:null,
        modelo:null,
        dia_colocacion:null,
        dia_remocion:null,
        latitud:null,
        longitud:null,
        altitud:null,
        vegetacion:null,
        collector:null,
        idEstacion:4,
      }
    }
  },
  methods:{    
    PostCamara(e){
      axios.post('http://localhost:3000/api/camara/', this.camaraPosts )
      .then ( (response)=>{
            console.log(response)
      })
        e.preventDefault()
    },    
  }

};
</script>