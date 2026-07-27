const modal = document.getElementById("modal");
const openBtns = document.querySelectorAll("#openModal");
const closeBtn = document.querySelector(".close-btn");



openBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        modal.classList.add("active");

    });

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
=======================

const header = document.querySelector("header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});