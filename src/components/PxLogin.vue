<template>
	<div class="container">
		
		<div class="row justify-content-center">

			<div class="container-mod" id="container">
				<div class="row">
					<div class="form-container sign-up-container">
						<form action="#">
							<div class="row">
								<div class="col-sm-12">
									<h1>Crear Cuenta</h1>
								</div>

							</div>
							<div class="row">
								<div class="col-sm-12">
									<div class="social-container">
										<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
										<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
										<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
									</div>
								</div>
							</div>

							<div class="row justify-content-center">
								<span>o usa tu email para registrarte</span>
								<input type="text" placeholder="Nombre" />
								<input type="email" placeholder="Email" />
								<input type="password" placeholder="Contrase&#241;a" />
								<button>Registrarse</button>
							</div>
						</form>
					</div>
				</div>
				<div class="row">
					<div class="form-container sign-in-container">
						<form action="#">
							<h1>Iniciar Sesi&oacute;n</h1>
							<div class="social-container">
								<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
								<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
								<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
							</div>
							<span>o usa tu cuenta</span>
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Contrase&#241;a" />
							<a href="#">Olvidaste tu contrase&#241;a?</a>
							<button>Iniciar</button>
						</form>
					</div>
				</div>
				<div class="row">
				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-panel overlay-left">
							<h1>Bienvenido de Vuelta!</h1>
							<p>Para mantenerse conectado, Inicia Sesi&oacute;n</p>
							<button class="ghost" id="signIn" v-on:click="sign_in">Iniciar</button>
						</div>
						<div class="overlay-panel overlay-right">
							<img src="https://www.animalkarma.org.mx/theme/img_m/m1.png" alt="">
							<h1>Hola Amig&#64;!</h1>
							<p>Ingresa unos cuantos datos y unete</p>
						<!--	<button class="ghost" id="signUp" v-on:click="sign_up">Registrarse</button>-->
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
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
  methods:{
sign_in(){
  
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

},
sign_up(){
  const signUpButton = document.getElementById('signUp');

const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});


}




    
  },
  name: "PxJumbo"

  
};

</script>


<style scoped>
@import 'https://fonts.googleapis.com/css?family=Montserrat:400,800';


body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	/*height: 100vh;*/
	/*margin: -20px 0 50px;*/
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF8500;
	background-color: #FF8500;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container-mod {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container-mod.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container-mod.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container-mod.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background:#FF8500;
	background: -webkit-linear-gradient(to right, #FF8500, #FF8500);
	background: linear-gradient(to right, #FF8500, #FF8500);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container-mod.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container-mod.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container-mod.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

</style>