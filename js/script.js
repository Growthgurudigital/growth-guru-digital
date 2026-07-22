document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {

            faqItems.forEach(faq => {

                if (faq !== item) {
                    faq.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    });

});

/// ==============================
// Mobile Menu Toggle
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-toggle i");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});

// Close menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});
// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {

    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});
// Close menu with Escape key
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

const form = document.getElementById("contactForm");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

if (form && result && submitBtn) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        const formData = new FormData(form);

        try {

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            console.log("Web3Forms Response:", data);

            if (data.success) {

    // Google Analytics 4 Lead Event
    gtag('event', 'generate_lead', {
        form_name: 'Contact Form',
        method: 'Web3Forms'
    });

    result.className = "form-message success";

                result.innerHTML = `
                    <div class="message-box">
                        <strong>Thank You!</strong><br>
                        Your message has been sent successfully.<br>
                        We will contact you within 24 hours.
                    </div>
                `;

                form.reset();

                submitBtn.innerHTML = "✓ Sent Successfully";

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = "Get Free Consultation";
                }, 2000);

                setTimeout(() => {
                    result.innerHTML = "";
                }, 5000);

            } else {

                result.className = "form-message error";

                result.innerHTML = `
                    <div class="message-box">
                        <strong>${data.message}</strong>
                    </div>
                `;

                submitBtn.disabled = false;
                submitBtn.innerHTML = "Get Free Consultation";
            }

        } catch (error) {

            console.error(error);

            result.className = "form-message error";

            result.innerHTML = `
                <div class="message-box">
                    <strong>Network Error</strong><br>
                    Please try again.
                </div>
            `;

            submitBtn.disabled = false;
            submitBtn.innerHTML = "Get Free Consultation";
        }

    });

}

document.addEventListener("DOMContentLoaded",function(){

if(localStorage.getItem("hideReview")){
document.getElementById("reviewPopup").style.display="none";
return;
}

document.querySelector(".close-review").onclick=function(){

document.getElementById("reviewPopup").style.display="none";

if(localStorage.getItem("reviewClosed")){
    return;
}

};

});
