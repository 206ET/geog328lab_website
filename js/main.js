document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".counted");
    sections.forEach((section, i) => section.textContent = `${i + 1}. ${section.textContent}`);
});

const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        document.querySelector(".navbar .active").classList.remove("active");
        this.classList.add("active");
    });
});

