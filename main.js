
const modal = document.getElementById("modal");
const openBtns = document.querySelectorAll("#openModal");
const closeBtn = document.querySelector(".close-btn");

const header = document.querySelector("header");
const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

// OPEN MODAL

if (modal) {
    openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("active");
        });
    });

    // CLOSE MODAL

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    // CLOSE BY CLICKING OUTSIDE

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // CLOSE WITH ESCAPE

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("active");
        }
    });
}

// HEADER SCROLL EFFECT

function updateHeader() {
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 20);
    }
}

window.addEventListener("scroll", updateHeader, { passive: true });

updateHeader();

// BURGER MENU

if (burger && nav) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
    });

    // CLOSE MENU AFTER CLICKING A LINK

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("active");
            nav.classList.remove("active");
        });
    });
}
