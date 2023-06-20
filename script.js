const submitBtn = document.getElementById("submit")
let greenIcon = document.getElementById("green")
let purpleIcon = document.getElementById("purple")
let redIcon = document.getElementById("red")

greenIcon.setAttribute(
  "value",
  '<i class="fa fa-check-square fa-green" aria-hidden="true" ></i>'
)

purpleIcon.setAttribute(
  "value",
  '<i class="fa fa-check-square " aria-hidden="true" style="color: purple;"></i>'
)

redIcon.setAttribute(
  "value",
  '<i class="fa-solid fa-square-xmark" style="color:red;"></i>'
)

submitBtn.addEventListener("click", function (event) {
  event.preventDefault()
  const taskInput = document.getElementById("task-input")
  const statusInput = document.getElementById("status")

  const todoContainer = document.querySelector(".todo-item")
  const todoItems = todoContainer.querySelectorAll(".todo-content")
  let ellipsisBtn = document.querySelectorAll(".ellipsis")
  // const ellipsisBtn = document.getElementsByClassName("fa-ellipsis-vertical")
  const btnContainer = document.querySelector(".bcontainer")
  const editBtn = document.querySelector(".b1")
  const deleteBtn = document.querySelector(".b2")
  //stop the button from submitting empty form
  if (taskInput.value.trim() === "") {
    console.log("empty")
    return
  }
  const indexEL = 0
  const newElement = `<section class="todo-content">
        <div class=" index">${indexEL + todoContainer.children.length}</div>
        <div class="task">${taskInput.value}</div>
        <div class="ellipsis"><i class="fa-solid fa-ellipsis-vertical"></i></div>
        <div class="status">${statusInput.value}</div>
        <div class="bcontainer hidden">
            <div class="m1"><img src="triangle-removebg-preview.png" alt=""></div>
            <div class="buttons">
                <button class="b1"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="b2"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
        
        </section>`

  todoContainer.insertAdjacentHTML("beforeend", newElement)

  console.log(todoContainer)

  console.log(ellipsisBtn)

  todoItems.forEach((element) => {
    element.addEventListener("click", () => {
      btnContainer.classList.remove("hidden")
    })
  })

  console.log(todoItems)
  taskInput.value = ""
})
