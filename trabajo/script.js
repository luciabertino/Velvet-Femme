let carrito = 0;

const botones = document.querySelectorAll(".add-cart");
const contador = document.getElementById("cart-count");

botones.forEach(boton => {

boton.addEventListener("click", () => {

carrito++;

contador.textContent = carrito;

boton.innerText = "✓ Agregado";

setTimeout(() => {
boton.innerText = "Agregar";
},1500);

});

});

const form = document.getElementById("newsletter-form");

form.addEventListener("submit", e => {

e.preventDefault();

const email = document.getElementById("email").value;

if(email === ""){

alert("Ingresa un correo válido");
return;

}

alert("¡Bienvenida a Velvet Circle! ✨");

form.reset();

});