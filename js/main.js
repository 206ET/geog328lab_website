document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let count = 1;

    sections.forEach(sec => {
        let h2 = sec.querySelector("h2");
        if (h2) {
            h2.innerText = `Section ${count}: ${h2.innerText}`;
            count++;
        }
    });
});
