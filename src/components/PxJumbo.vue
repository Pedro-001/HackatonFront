<template>
  <div class="jumbotron jumbo_index">
    <div class="container description_jumbo">
      <div class="row">
        <div class="col-sm-12 align-items-start">
          <h1 class="margin_15">Bienvenido</h1>
          <p class="text-bold text_jumbo margin_15">
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
        <!--<div class="circulo" id="circulo1"></div>-->
        <!--<div class="shake-slow shake-constant shake-constant--hover">ddd</div>-->
        <img src="../assets/img/imagen1_col.svg" alt="" class="margin_15" />
        <h2>Analisis de imagenes</h2>
        <p>
          Por medio de un modelo de inteligencia artificial, se busca distinguir
          especies de tipo salvaje en imagenes.
        </p>
        <!--<p>
          <a class="btn btn-outline-dark buton_circle"  id="btn_1" href="#" role="button">
            <div class="shake-slow shake-constant shake-constant--hover">
            <img src="../assets/img/animal1.png" alt="" class="img-button"></div> conoce &raquo;</a
          >
        </p>-->
      </div>
      <div class="col-md-4 colum">
        <!--<div class="circulo" id="circulo2"></div>-->
        <!--<div class="shake-slow shake-constant shake-constant--hover">ddd</div>-->

        <img src="../assets/img/map2.png" alt="" class="margin_15" />

        <h2>Geo Notificaciones</h2>
        <p>
          Nuestra plataforna se basa en geolocalizaci&oacute;n para notificar a
          los usuarios sobre especies, medidas de proteccion y proyectos de
          Animal Karma. Correspondidas a su ubicaci&oacute;n
        </p>
        <!--<p>
          <a class="btn btn-outline-dark" id="btn_2" href="#" role="button"
            ><div class="shake-slow shake-constant shake-constant--hover">
            <img src="../assets/img/animal2.png" alt="" class="img-button"></div>Conoce &raquo;</a
          >
        </p>-->
      </div>
      <div class="col-md-4 colum">
        <!--<div class="circulo" id="circulo3"></div>-->
        <!--<div class="shake-slow shake-constant shake-constant--hover">ddd</div>-->
        <img src="../assets/img/map3.png" alt="" class="margin_15" />
        <h2>Mapas Interactivos</h2>
        <p>
          Tenemos mapas, donde mostramos allanamiento de felinos y sus
          respectivas caracteristicas.
        </p>
        <!--<p>
          <a class="btn btn-outline-dark" id="btn_3" href="#" role="button"
            ><div class="shake-slow shake-constant shake-constant--hover">
            <img src="../assets/img/animal3.png" alt="" class="img-button"></div>Conoce &raquo;</a
          >
        </p>-->
      </div>

      <hr />
    </div>
  </div>

  <div class="container marketing">
    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Animal Karma.
          
        </h2>
        <p class="lead">
          La fundación está dedicada al cuidado de los ecosistemas mediante el uso de tecnologías disruptivas para analizar el comportamiento de la flora y la fauna, correlacionar su información y tomar decisiones con base en ella.
        </p>
      </div>
      <div class="col-md-5">
        <img
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          src="../assets/img/karma.jpg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 500x500"
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">
          Programa de Entrenamiento en Tecnologías Especializadas Vía
            Platzi.
         
        </h2>
        <p class="lead">
          Nuestro equipo es parte del entrenamiento Platzi en Morelos.
        </p>
      </div>
      <div class="col-md-5 order-md-1">
          <ul class="menu">
  <li>
    <a href="#0">
      <span><img
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img_entre"
          
          src="../assets/img/entrenamiento.png"
          
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 500x500"
        /></span>
      <span>
        <img
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          src="https://miro.medium.com/max/2381/1*qhaAIKMmhpCyHnjWnfKPvQ.jpeg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 500x500"
        />
        
      </span>
    </a>
  </li>
  
</ul>
       
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          En el Estado de Morelos 
        </h2>
        <p class="lead">
           se encuentran seis especies de felinos 

 son el jaguar, el ocelote, el tigrillo, el puma, el lince y el yaguarundí.
        </p>
      </div>
      <div class="col-md-5">
       <img src="https://www.animalkarma.org.mx/theme/img/bg55-2.png" alt="">
      </div>
    </div>

    <hr class="featurette-divider" />

    <!-- /END THE FEATURETTES -->
  </div>
  <!-- /.container -->



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
  min-height: 580px;
  color: azure;
  font-weight: 300;
  font-size: 20px;
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
#circulo1 {
  background-image: url("https://www.animalkarma.org.mx/theme/img/bg55-2.png");
}
#circulo2 {
  background-image: url("https://www.animalkarma.org.mx/theme/img/bg11-6.jpg");
}
#circulo3 {
  background-image: url("../assets/img/puma.jpg");
}
.colum {
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
#btn_1 {
  background-color: #cd5c5c;
  border-color: #cd5c5c;
}
#btn_2 {
  background-color: #f08080;
  border-color: #f08080;
}
#btn_3 {
  background-color: #fa8072;
  border-color: #fa8072;
}
.buton_circle {
  display: flex;
}
.img-button {
  width: 20px;
  margin-right: 10px;
}
.margin_15 {
  margin-bottom: 2rem;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
/*--------------------- */
:root {
  --body-bg-color: #1a1c1d;
  --text-color: #aaaebc;
  --hr-color: #26292a;
  --red: #e74c3c;
}






.menu {
  display: flex;
  justify-content: center;
}

.menu li {
  margin-right: 70px;
}

.menu a {
  position: relative;
  display: block;
  overflow: hidden;
}

.menu a span {
  transition: transform 0.2s ease-out;
}

.menu a span:first-child {
  display: inline-block;
  padding: 10px;
}

.menu a span:last-child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
}

.menu i {
  font-size: 100%;
}

.menu a:hover span:first-child {
  transform: translateY(100%);
}

.menu a:hover span:last-child,
.menu[data-animation] a:hover span:last-child {
  transform: none;
}
.img_entre{
  width: 500px;
  height: 200px;
}

/* ANIMATIONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.menu[data-animation="to-top"] a span:last-child {
  transform: translateY(100%);
}

.menu[data-animation="to-top"] a:hover span:first-child {
  transform: translateY(-100%);
}



</style>