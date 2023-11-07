const back = document.querySelector(".back")
const container = document.querySelector(".container")
const bodyHeight = document.body.scrollHeight

document.addEventListener("DOMContentLoaded", () => {
    back.style.height = `${bodyHeight}px`
    container.style.height = `${bodyHeight - 40}px`
});


