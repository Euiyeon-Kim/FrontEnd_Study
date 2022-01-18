const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list")
let toDos =[]

function storeToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function delToDO(event){
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter(item=>{return item.id !== parseInt(li.id)})
    storeToDos()
}

function renderNewToDo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id

    const span = document.createElement("span")
    span.innerText = newToDo.text
    li.appendChild(span)
    
    const delButton = document.createElement("button")
    delButton.innerText = "❌"
    delButton.addEventListener("click", delToDO)
    li.appendChild(delButton)
    
    toDoList.appendChild(li)
}

function handletoDoSubmit(event){
    event.preventDefault()
    const newToDo = {
        id: Date.now(),        
        text: toDoInput.value
    }
    toDos.push(newToDo)
    storeToDos()
    renderNewToDo(newToDo)
    toDoInput.value = ""
}

const savedToDos = localStorage.getItem("todos")
if (savedToDos != null){
    const parsedToDo = JSON.parse(savedToDos)
    toDos = parsedToDo
    parsedToDo.forEach(renderNewToDo)
}

toDoForm.addEventListener("submit", handletoDoSubmit)
