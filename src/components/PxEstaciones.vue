<template>
  <div class="flex-col items-center content-center">
      <h1 class="text-gray-700 text-2xl uppercase">Ingresa  una localidad </h1>            
            <form @submit="PostEstaciones" method="post">
            
                <input type="text" name="provincia" placeholder="Nombre provincia" v-model="Provinciaposts.provincia"> <br><br>
                <input type="text" name="pais" placeholder="Nombre pais" v-model="Provinciaposts.pais"> <br><br>
                <input type="text" name="notas" placeholder="notas" v-model="Provinciaposts.notas"> <br><br>
                <!-- <input type="hidden" name="idLocalidad" v-model="Provinciaposts.notas" value="1"> <br><br> -->
                <button type = "submit"> Aceptar </button>

            
            </form>
          
          
        
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: "PxEstaciones",

data(){
    return{
      Provinciaposts:{
        provincia:null,
        pais:null,
        notas:null,
        idLocalidad:1
      }
    }
  },
  methods:{    
    PostEstaciones(e){
      axios.post('http://localhost:3000/api/estacion/', this.Provinciaposts )
      .then ( (response)=>{
            console.log(response)
      })
        e.preventDefault()
    },    
  }

};
</script>