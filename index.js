/* =====================================================
   NAVBAR ACTIVE LINK
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");

const mobileNavItems =
    document.querySelectorAll(".mobile-nav-item");


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



/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        const icon =
            question.querySelector("span");


        /* Close other FAQs */

        document
            .querySelectorAll(".faq-answer")
            .forEach(item => {

                if (item !== answer) {

                    item.style.maxHeight = null;

                }

            });


        document
            .querySelectorAll(".faq-question span")
            .forEach(item => {

                if (item !== icon) {

                    item.textContent = "+";

                }

            });


        /* Open / close current */

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

            icon.textContent = "+";

        } else {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            icon.textContent = "−";

        }

    });

});



/* =====================================================
   PLAY BUTTON
===================================================== */

const playButtons =
    document.querySelectorAll(
        ".play-btn, .music-play"
    );


playButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("playing");

    });

});



/* =====================================================
   SCROLL ACTIVE MOBILE NAV
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current = section.getAttribute("id");

        }

    });


    mobileNavItems.forEach(item => {

        item.classList.remove("active");

        const href =
            item.getAttribute("href");

        if (
            href === "#" + current
        ) {

            item.classList.add("active");

        }

    });

});