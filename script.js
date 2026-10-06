```javascript
/* =========================
   TYPING EFFECT
========================= */

const typing =
    document.getElementById("typing");

const texts = [
    "Web Developer",
    "Mahasiswa Teknik Informatika",
    "Frontend Developer",
    "Programmer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentText =
        texts[textIndex];


    if (!deleting) {

        typing.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentText.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typing.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            textIndex++;


            if (
                textIndex >=
                texts.length
            ) {

                textIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}


typeEffect();



/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const navMenu =
    document.querySelector(
        ".nav-menu"
    );


menuToggle.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle(
            "active"
        );


        const icon =
            menuToggle.querySelector(
                "i"
            );


        if (
            navMenu.classList.contains(
                "active"
            )
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);



/* =========================
   CLOSE MENU
========================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove(
                    "active"
                );


                const icon =
                    menuToggle.querySelector(
                        "i"
                    );


                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }
        );

    }
);



/* =========================
   ACTIVE NAVBAR
========================= */

const sections =
    document.querySelectorAll(
        "section"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =========================
   SKILL BAR
========================= */

const skillBars =
    document.querySelectorAll(
        ".progress-bar"
    );


const skillObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const bar =
                            entry.target;


                        const width =
                            bar.getAttribute(
                                "data-width"
                            );


                        bar.style.width =
                            width;

                    }

                }
            );

        },
        {
            threshold: 0.5
        }
    );


skillBars.forEach(
    function (bar) {

        skillObserver.observe(
            bar
        );

    }
);



/* =========================
   BACK TO TOP
========================= */

const backTop =
    document.getElementById(
        "backTop"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 400
        ) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );

        const name =
            document.getElementById(
                "name"
            ).value;


        alert(
            "Terima kasih, " +
            name +
            ". Pesan berhasil dikirim."
        );


        contactForm.reset();

    }
);
```
