
const todoList = document.getElementById("todo-list")
const doneList = document.getElementById("done-list")
const enterField = document.getElementById("enter-field");
const submitButton = document.getElementById("submit-button");
const input = document.getElementById("new-item-field-input");

const allItems = []

function addComponentToList (item) {
  if (item.isDone) {
    doneList.appendChild(item.component)
  } else {
    todoList.appendChild(item.component)
  }
}

function clearList () {
  todoList.innerHTML = ""
}

function clearInput () {
  input.value = ""
}

function populateLists () {
  clearList()
  for (i in allItems){
    let curItem = allItems[i]
    addComponentToList(curItem)
  }
}

function generateItem (str) {
  const newItem = {
    text: str,
    isDone: false,
    component: null
  }
  return newItem
}

function generateListComponent (item) {

  let newListComponent = document.createElement("div")
  let cButton = document.createElement("button")
  cButton.name = "change status"

  const toggleDone = () => {
    const index = allItems.indexOf(item)
    if (index !== -1){
      allItems[index].isDone = !(allItems[index].isDone)
    }
    populateLists()
  }

  cButton.addEventListener("click", toggleDone)
  newListComponent.appendChild(document.createTextNode(item.text))
  newListComponent.appendChild(cButton)

  return newListComponent

}
 
function handleNewInput () {
  const newItem = generateItem(input.value)
  newItem.component = generateListComponent(newItem)
  allItems.push(newItem)
  clearInput()
}

function handleSubmitButton (event) {
  if (input.value !== "") {    
      handleNewInput()
      populateLists()
    }
  event.preventDefault()
}

submitButton.addEventListener("click", handleSubmitButton)
