

        const modal = document.getElementById("modal");
        const openBtn = document.getElementById("openModal");
        const closeBtn = document.querySelector(".close-btn");

        openBtn.addEventListener("click", () => {
            modal.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });

        window.addEventListener("click", (e) => {

            if (e.target === modal) {
                modal.classList.remove("active");
            }

        });

        document.addEventListener("keydown", (e) => {

            if (e.key === "Escape") {
                modal.classList.remove("active");
            }

        });



        const header = document.querySelector("header");

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });



        const burger = document.getElementById("burger");
        const nav = document.querySelector("nav");

        burger.addEventListener("click", () => {

            burger.classList.toggle("active");
            nav.classList.toggle("active");

        });



        document.querySelectorAll("nav a").forEach(link => {

            link.addEventListener("click", () => {

                burger.classList.remove("active");
                nav.classList.remove("active");

            });

        });
