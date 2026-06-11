// =========================
// SCROLL HEADER
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.position = "fixed";
        header.style.top = "0";
        header.style.left = "0";
        header.style.width = "100%";
        header.style.zIndex = "999";
        header.style.background = "rgba(255,255,255,0.95)";
        header.style.backdropFilter = "blur(10px)";
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

    } else {

        header.style.position = "relative";
        header.style.boxShadow = "none";

    }

});


// =========================
// FADE IN ELEMENTS
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".card, .about, .newsletter, .gallery img"
).forEach(el=>{

    el.classList.add("hidden");
    observer.observe(el);

});


// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#dcb8b4";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// =========================
// NEWSLETTER
// =========================

const subscribeBtn =
document.querySelector(".newsletter-form button");

if(subscribeBtn){

    subscribeBtn.addEventListener("click", () => {

        const email =
        document.querySelector(".newsletter-form input");

        if(email.value.trim() === ""){

            alert("Please enter your email.");

            return;

        }

        alert("Thank you for subscribing 💕");

        email.value = "";

    });

}


// =========================
// CARD HOVER EFFECT
// =========================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


// =========================
// HERO PARALLAX
// =========================

window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY =
    offset * 0.4 + "px";

});


// =========================
// TYPE WRITER EFFECT
// =========================

const title = document.querySelector(".hero h2");

if(title){

    const originalText = title.innerHTML;

    title.innerHTML = "";

    let i = 0;

    function typeWriter(){

        if(i < originalText.length){

            title.innerHTML += originalText.charAt(i);

            i++;

            setTimeout(typeWriter,40);

        }

    }

    setTimeout(typeWriter,500);

}


// =========================
// CONSOLE SIGNATURE
// =========================

console.log(`
╔══════════════════════════════╗
║      LA VIE EN ROSE BLOG     ║
║       Developed 2026         ║
╚══════════════════════════════╝
`);