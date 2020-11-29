<template>
  <div class="jumbotron jumbo_index">
    <div class="container description_jumbo">
      <div class="row ">
        <div class="col-sm-12 colum align-items-start">
          <h1>Bienvenido</h1>
          <p class="text-bold text_jumbo">
            Buscamos la conservacion de los ecosistemas y especies que habitan
            en ellos
          </p>
          <p>
            <a
              class="btn btn-info btn-lg"
              target="_blank"
              href="https://www.animalkarma.org.mx/"
              role="button"
              >Conoce más &raquo;</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <!-- Example row of columns -->
    <div class="row align-items-center">
      <div class="col-md-4 colum">
        <div class="circulo" id="circulo1"></div>
        <!--<div class="shake-slow shake-constant shake-constant--hover">ddd</div>-->
        <h2>Felinos en el Estado de Morelos</h2>
        <p>
          Estos son el jaguar, el ocelote, el tigrillo, el puma, el lince y el
          yaguarundí;
        </p>
        <p>
          <a class="btn btn-outline-dark buton_circle"  id="btn_1" href="#" role="button">
            <div class="shake-slow shake-constant shake-constant--hover">
            <img src="../assets/img/animal1.png" alt="" class="img-button"></div> conoce &raquo;</a
          >
        </p>
      </div>
      <div class="col-md-4  colum">
        <div class="circulo" id="circulo2"></div>
        <!--<div class="shake-slow shake-constant shake-constant--hover">ddd</div>-->
        <h2>Felinos en el Estado de Morelos</h2>
        <p>
          Estos son el jaguar, el ocelote, el tigrillo, el puma, el lince y el
          yaguarundí;
        </p>
        <p>
          <a class="btn btn-outline-dark" id="btn_2" href="#" role="button"
            ><div class="shake-slow shake-constant shake-constant--hover">
            <img src="../assets/img/animal2.png" alt="" class="img-button"></div>Conoce &raquo;</a
          >
        </p>
      </div>
      <div class="col-md-4  colum">
        <div class="circulo" id="circulo3"></div>
        <!--<div class="shake-slow shake-constant shake-constant--hover">ddd</div>-->
        <h2>Felinos en el Estado de Morelos</h2>
        <p>
          Estos son el jaguar, el ocelote, el tigrillo, el puma, el lince y el
          yaguarundí;
        </p>
        <p>
          <a class="btn btn-outline-dark" id="btn_3" href="#" role="button"
            ><div class="shake-slow shake-constant shake-constant--hover">
            <img src="../assets/img/animal3.png" alt="" class="img-button"></div>Conoce &raquo;</a
          >
        </p>
      </div>

      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "PxJumbo",

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.jumbo_index {
  background-image: url("../assets/img/jumbo_leopar.jpg");
  background-position: center 30%;
  color: azure;
  font-weight: 700;
  
}
.circulo {
  width: 150px;
  height: 150px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  
   background-position: 50% 50%;
   background-size: cover;
}
#circulo1{
background-image:url('https://www.animalkarma.org.mx/theme/img/bg55-2.png') ;
}
#circulo2{
  background-image:url('https://www.animalkarma.org.mx/theme/img/bg11-6.jpg') ;
}
#circulo3{
  background-image:url('../assets/img/puma.jpg') ;
}
.colum{
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* --------------botones---------*/
#btn_1{
  background-color: #CD5C5C;
  border-color: #CD5C5C;
}
#btn_2{
  background-color: #F08080;
  border-color: #F08080;
}
#btn_3{
  background-color: #FA8072;
  border-color: #FA8072;
}
.buton_circle{
  display: flex;
}
.img-button{
  width: 20px;
  margin-right:10px ;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>