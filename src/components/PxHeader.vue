<template>
  <!--<header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-orange-600 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-2" />
          <span class="font-semibold text-xl tracking-tight">Hackaton1</span>
        </div>
        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>-->
  <header>
   <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#"><img src="../assets/img/icono_nav.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/" >Inicio <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/api" >Api </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" >Nosotros </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/log" >Iniciar Sesión </router-link>
          </li>
         
          
        </ul>
        
      </div>
    </nav>

    <!---->

    </header>
</template>

