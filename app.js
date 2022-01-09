const h1 = document.querySelector(".hello h1")

function click(){
    const newClass = "active"
    h1.classList.toggle(newClass)
}

h1.addEventListener("click", click)    