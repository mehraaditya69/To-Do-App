const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const tasks = document.getElementById("tasks")

addTaskBtn.addEventListener("click" , function()
{

   const tastText = taskInput.value.trim();
   if(tastText ==="") return;

    const newtask = document.createElement("li")

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"

    const taskLabel = document.createElement("span")
    taskLabel.textContent = tastText

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("delet-Btn")

    deleteBtn.addEventListener("click", function()
{
   newtask.remove()
})

    newtask.appendChild(checkBox)
    newtask.appendChild(taskLabel)
    newtask.appendChild(deleteBtn)

    tasks.appendChild(newtask)

    taskInput.value = ""

})