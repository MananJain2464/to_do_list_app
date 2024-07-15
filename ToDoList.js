// Declare a global array
var ToDoList = [];
//console.log(globalArray);

function handleButtonClick(buttonText) 
{
    alert('Button Clicked: ' + buttonText);
    // Example using prompt for text input
    var userInput = prompt("Enter the task");
    ToDoList.push(userInput);
   // updateTaskList();
    alert('Added Task successfully') ;  
}

function updateTaskList() 
{
    var taskListElement = document.getElementById("taskList");
    
    // Clear the existing content
    taskListElement.innerHTML = "";

    // Display each task in the array
    ToDoList.forEach(function(task) {
        var taskItem = document.createElement("p");
        taskItem.textContent = task;
        taskListElement.appendChild(taskItem);
    });
}

function handleListAllTodo()
{
    updateTaskList();

    // Optionally, you can hide the "taskListContainer" initially and show it when the button is clicked
    //taskListContainer.style.display = "block";
}

function handleRemoveTodo()
{
    var indice = prompt("Enter the task number you want to remove") ;
    ToDoList.splice(indice-1 , 1) ;
    updateTaskList();
}

function handlequit()
{
    location.reload();
}


