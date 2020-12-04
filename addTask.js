
// first get the button element and attach 
//a listener for that event(click) and that should respond
// creating a need li element inside of ul element #listOfTasks

const addButton = document.getElementById('addTaskButton');




function addLi(evt) {
    const list = document.getElementById('listOfTasks');
    const thingToDo = document.getElementById('input');
    let valor = thingToDo.value;
    let task = document.createElement('li');
    task.innerHTML = valor;
    if (valor === "") {
        alert('I think someone is forgeting something!');
    }
    else {
        list.appendChild(task);
    }
    thingToDo.value = "";

}

addButton.addEventListener('click', addLi);
