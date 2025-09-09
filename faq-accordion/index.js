document.querySelectorAll(".quest").forEach((el) => {
    el.setAttribute("data-active", false);
    el.addEventListener("click", () => {
        const active = el.getAttribute("data-active");
        console.log(active.data.set = );
    });
});
