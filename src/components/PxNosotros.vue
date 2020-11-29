<template>
	
     <div >
    <img src="../assets/img/1.png"  alt="" class="responsive">
    <img src="../assets/img/2.png" class="responsive" alt="">
    <img src="../assets/img/3.png" class="responsive" alt="">
    <img src="../assets/img/4.png" class="responsive" alt="">
    <img src="../assets/img/5.png" class="responsive" alt="">
      </div>
</template>

<script>
export default {
props: {
    assets: {
      type: Array,
      default: () => [],
    },

  },
 
  name: "PxNosotros"

  
};

</script>


<style scoped>
.responsive{
	width: 100%;
}

</style>