// CARRITO

let carrito = [];

const botones = document.querySelectorAll(".add-cart");
const contador = document.getElementById("cart-count");

botones.forEach((boton)=>{

boton.addEventListener("click",()=>{

const nombre = boton.dataset.name;

carrito.push(nombre);

contador.textContent = carrito.length;

alert(nombre + " agregado al carrito");

});

});

// NEWSLETTER

const form = document.getElementById("newsletter-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email = document.getElementById("email").value;

if(email === ""){

alert("Ingresa un correo válido");
return;

}

alert("¡Gracias por suscribirte!");

form.reset();

});

// ANIMACIONES

const elementos = document.querySelectorAll(".card, .product");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

elementos.forEach((el)=>{

observer.observe(el);

});