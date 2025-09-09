document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        const parent = item.parentElement;
        const isActive = parent.classList.contains("active");

        // Close all other FAQ items
        document.querySelectorAll(".faq-item").forEach(faq => {
            faq.classList.remove("active");
        });

        // Toggle the clicked FAQ item
        if (!isActive) {
            parent.classList.add("active");
        }
    });
});
