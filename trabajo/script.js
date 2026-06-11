/* ==========================
   CARRITO
========================== */

let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.innerHTML = "✓ Agregado";

        button.style.background = "#70564c";

        setTimeout(() => {

            button.innerHTML = "Agregar al carrito";

            button.style.background = "#cfa99d";

        }, 1500);

    });

});


/* ==========================
   NEWSLETTER
========================== */

const newsletterForm = document.getElementById("newsletter-form");

if(newsletterForm){

    newsletterForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("email").value;

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(email === ""){

            alert("Por favor ingresa un correo.");

            return;

        }

        if(!emailRegex.test(email)){

            alert("Correo inválido.");

            return;

        }

        alert("✨ Gracias por suscribirte a Velvet Femme ✨");

        newsletterForm.reset();

    });

}


/* ==========================
   ANIMACIÓN AL SCROLL
========================== */

const hiddenElements = document.querySelectorAll(
`
.hero-content,
.category-card,
.product-card,
.newsletter-content,
.footer-column
`
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================
   NAVBAR SCROLL
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        navbar.classList.add("navbar-scroll");

    }

    else{

        navbar.classList.remove("navbar-scroll");

    }

});


/* ==========================
   BOTÓN VOLVER ARRIBA
========================== */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        backToTop.classList.add("active");

    }

    else{

        backToTop.classList.remove("active");

    }

});

backToTop.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================
   EFECTO PRODUCTOS
========================== */

const products = document.querySelectorAll(".product-card");

products.forEach(product => {

    product.addEventListener("mouseenter", ()=>{

        product.style.transform = "translateY(-10px)";

    });

    product.addEventListener("mouseleave", ()=>{

        product.style.transform = "translateY(0px)";

    });

});


/* ==========================
   PRELOADER SIMPLE
========================== */

window.addEventListener("load", ()=>{

    document.body.classList.add("loaded");

});


/* ==========================
   MENÚ MÓVIL FUTURO
========================== */

const menuButton = document.querySelector(".menu-toggle");

if(menuButton){

    menuButton.addEventListener("click", ()=>{

        document
        .querySelector(".navbar ul")
        .classList.toggle("open");

    });

}