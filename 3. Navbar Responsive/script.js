const menuToggle = document.querySelector(".menu-toggle");
const slider = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("trigger");
    if (!slider.classList.contains("slider")) {
        slider.classList.toggle("slider");
        slider.style.display = "flex";
    } else {
        slider.classList.toggle("closeSlider");
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            slider.style.display = "none";
        }, 500);
    }
})
