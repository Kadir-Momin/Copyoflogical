window.addEventListener('scroll', setScrollVar)
window.addEventListener('resize', setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeoghtScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    console.log(percentOfScreenHeoghtScrolled)
    console.log(Math.min(percentOfScreenHeoghtScrolled * 100, 100))
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeoghtScrolled * 100, 100))
}

setScrollVar()

const observer = new IntersectionObserver(entries => {
    for (let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i]
        if (entry.isIntersecting) {
            document.querySelectorAll("[data-img]").forEach(img => {
                img.classList.remove("show")
            })
            const img = document.querySelector(entry.target.dataset.imgToShow)
            img?.classList.add("show")
            break
        }
    }
})


document.querySelectorAll("[data-img-to-show]").forEach(section => {
    observer.observe(section)
})