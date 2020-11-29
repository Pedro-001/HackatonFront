<template>
  <div class="flex-col items-center content-center">
      <h1 class="text-gray-700 text-2xl uppercase">Ingresa  una localidad </h1>            
            <form @submit="PostLocalidades" method="post">
                <input type="text" name="nombre" placeholder="Nombre Localidad" v-model="posts.nombre"> <br><br>
                <button type = "submit"> Aceptar </button>
            </form>
          
          
        
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: "PxLocalidades",

data(){
    return{
      posts:{
        nombre:null
      }
    }
  },
  methods:{    
    PostLocalidades(e){
      axios.post('http://localhost:3000/api/localidad/', this.posts )
      .then ( (response)=>{
            console.log(response)
      })
        e.preventDefault()
    },    
  }

};
</script>

