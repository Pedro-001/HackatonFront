<template>
  <div>
    <PxAPI  />
    <PxLocalidades/>
    <PxEstaciones/>

 
  </div>
</template>

<script>
import PxAPI from "@/components/PxAPI";
import PxLocalidades from "@/components/PxLocalidades"
import PxEstaciones from "@/components/PxEstaciones"
export default {
  name: 'api',
  components: { PxAPI, PxLocalidades,PxEstaciones },
  
 }
</script>


change evento al input seleccionar archivo



