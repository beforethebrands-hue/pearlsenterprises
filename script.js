// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

// ===========================
// CLOSE MENU AFTER CLICKING
// ===========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ===========================
// STICKY HEADER EFFECT
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";

    }
    else{

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 18px rgba(0,0,0,.08)";

    }

});

// ===========================
// CONTACT FORM
// ===========================

const form = document.querySelector(".contact-form");

// ===========================
// EMAILJS
// ===========================

emailjs.init({
    publicKey: "7Wuwk0ttFztAKXegm"
});

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_i2elu2d",
        "template_uxepzzj",
        this
    )

    .then(() => {

        submitBtn.innerHTML = "✓ Message Sent";

        alert(
`Thank you for contacting PEARLS ENTERPRISES!

Your enquiry has been sent successfully.

We will get back to you shortly.`
        );

        form.reset();

    })

    .catch((error) => {

        console.error(error);

        alert(
`Message couldn't be sent.

Please try again.`
        );

    })

    .finally(() => {

        submitBtn.disabled = false;
        submitBtn.innerHTML = "Send Message";

    });

});

});

// ===========================
// SIMPLE FADE-IN ANIMATION
// ===========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".about-card, .service-card, .exp-box, .contact-form, .contact-info"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});