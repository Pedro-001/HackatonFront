<template>
  <div>
    <PxAPI  />
    <PxLocalidades/>
    <PxEstaciones/>
    <PxCamara/>
    <Pxfotografia/>

 
  </div>
</template>

<script>
import PxAPI from "@/components/PxAPI";
import PxLocalidades from "@/components/PxLocalidades"
import PxEstaciones from "@/components/PxEstaciones"
import PxCamara from "@/components/PxCamara"
import Pxfotografia from "@/components/Pxfotografia"

export default {
  name: 'api',
  components: { PxAPI, PxLocalidades,PxEstaciones,PxCamara,Pxfotografia },
  
 }
</script>


change evento al input seleccionar archivo



