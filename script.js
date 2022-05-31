const faqs = document.querySelectorAll(".questionContainer");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});