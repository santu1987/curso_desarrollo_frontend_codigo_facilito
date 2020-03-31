//Manipulando el dom

///Para seleccionar un solo elemento
let container = document.querySelector(".container")
//Para seleccionar varios elementos
let links = document.querySelectorAll("a")

//Recorrer un arreglo
links.forEach(function(link){
	console.log(link)
})

//Ejemplo de eventos
let celdas = document.querySelectorAll("td")

celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log(this);
	})
})
//Ejem2
//Obtengo los elementos de la clase .close
let link2 = document.querySelectorAll(".close")

//Recorrerlos
link2.forEach(function(linked){
	//Agregar un evento click a cada uno de ellos
	linked.addEventListener('click',function(evento){
		console.log(evento);
		//Evitar que el evento ejecute su comportamiento por defecto
		evento.preventDefault();
		//Ejemplo 2 para quitar y agregar clases
		let content = document.querySelector(".content")
		//Quitarle las clases de animación que ya tiene
		content.classList.remove("fadeInDown");
		content.classList.remove("animated");

		//Agregar clases para animar su salida fadeOutUp
		content.classList.add("fadeOutUp");
		content.classList.add("animated");
		//espera un segundo y redirecciona
		setTimeout(function(){
			location.href= "/boletines_cf";
		},1000);
		return false;
	})
})

//Agregar y quitar clases
let iconos = document.querySelectorAll("i")
iconos.forEach(function(icono){
	icono.classList.remove("fa-star");
	icono.classList.add("fa-circle");

});



