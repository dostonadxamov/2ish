const buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const html = document.documentElement;
        html.dataset.theme = button.dataset.theme;
    })
})


