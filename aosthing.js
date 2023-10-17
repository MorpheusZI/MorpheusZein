const oberver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log("hai")
            entry.target.classList.toggle("showups")
        } else {
            entry.target.classList.remove("showups")
        }
    })
})



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log("hai")
            entry.target.classList.toggle("showup")
        } else {
            entry.target.classList.remove("showup")
        }
    })
})

const hiddenElement = document.querySelectorAll(".aosthings");
const hiddenElements = document.querySelectorAll(".aosthing");
hiddenElement.forEach((elie) => oberver.observe(elie))
hiddenElements.forEach((elie) => observer.observe(elie))