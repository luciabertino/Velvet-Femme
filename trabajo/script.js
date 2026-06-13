// ==========================
// HEADER SCROLL
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.position = "sticky";
        header.style.top = "0";
        header.style.zIndex = "1000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow = "none";

    }

});


// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
".card, .about, .newsletter, .gallery img"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ==========================
// NEWSLETTER
// ==========================

const subscribeBtn =
document.querySelector(".newsletter-form button");

if(subscribeBtn){

    subscribeBtn.addEventListener("click",()=>{

        const email =
        document.querySelector(".newsletter-form input");

        if(email.value.trim() === ""){

            alert("Ingresa tu correo electrónico");

            return;

        }

        alert("¡Gracias por suscribirte! 💕");

        email.value = "";

    });

}


// ==========================
// BOTÓN SUBIR
// ==========================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.background = "#B89B84";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// ==========================
// HOVER TARJETAS
// ==========================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0)";

    });

});


// ==========================
// EFECTO HERO
// ==========================

const heroButton =
document.querySelector(".hero button");

if(heroButton){

    heroButton.addEventListener("click",()=>{

        document.querySelector(".products")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}


// ==========================
// MENSAJE CONSOLA
// ==========================

console.log(`
╔════════════════════════════╗
║       VELVET FEMME         ║
║     Ropa y Lencería        ║
╚════════════════════════════╝
`);