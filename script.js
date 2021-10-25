let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function(){
    if(inputField.value.length == 0) {
        const button = document.querySelector('button');
        button.disabled = true;
    } else {
        var toDoList = document.createElement('p');
        toDoList.setAttribute("id", "task");
        toDoList.innerText = inputField.value;
        toDoContainer.appendChild(toDoList);
        inputField.value = "";

        toDoList.addEventListener('dblclick', function(){
            toDoContainer.removeChild(toDoList);
        })
    }
    const button = document.querySelector('button');
    button.disabled = false;
})

