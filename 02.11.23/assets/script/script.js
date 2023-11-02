let button = document.createElement("button")
let container = document.createElement("div")
let modal = document.createElement("div")
let modalbutton = document.createElement("button")


button.innerHTML = "<h1> Open Modal </h1>"
modalbutton.innerHTML = "Back"


document.body.append(button)
document.body.append(container)
container.append(modal)
modal.append(modalbutton)

container.classList.add("Wrapper")
modal.classList.add("Popup")

modalbutton.style.width = "100px"
modalbutton.style.height = "50px"
modalbutton.style.backgroundColor = "White"



container.style.width = "100%"
container.style.height = "100%"
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.alignItems = "center"
container.style.position = "relative"


modal.style.width = "500px"
modal.style.height = "250px"
modal.style.backgroundColor = "Orange"
modal.style.position = "absolute"
modal.style.display = "none"
modal.style.justifyContent = "center"
modal.style.alignItems = "end"
container.style.position = "relative"



button.addEventListener("click", function() {
    modal.style.display = "flex"
    modal.style.position = "fixed"


})

modalbutton.addEventListener("click", function() {
    modal.style.display = "none"
})