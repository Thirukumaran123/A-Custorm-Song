
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

mobileNavItems.forEach(item => {
    item.addEventListener("click", () => {
        mobileNavItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");
    });
});


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector("span");

        document.querySelectorAll(".faq-answer").forEach(item => {
            if (item !== answer) {
                item.style.maxHeight = null;
            }
        });

        document.querySelectorAll(".faq-question span").forEach(item => {
            if (item !== icon) {
                item.textContent = "+";
            }
        });

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";
        }
    });
});


const playButtons = document.querySelectorAll(".play-btn, .music-play");

playButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("playing");
    });
});


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    mobileNavItems.forEach(item => {
        item.classList.remove("active");

        const href = item.getAttribute("href");

        if (href === "#" + current) {
            item.classList.add("active");
        }
    });
});

