const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const nameInput = document.getElementById("nameInput");
const taskInputEdit = document.getElementById("taskInputEdit");
const nameInputEdit = document.getElementById("nameInputEdit");      
const editBlock = document.getElementById("editBlock");

let tasks = [
    {
        task : "task number1",
        createdBy: "Jora"
    }
];

function add(){


   if( taskInput.value.length === 0){
    alert("Please add some text in the input")
   }else{
    const task = taskInput.value;
    const name = nameInput.value;

    const newTask = {
        task : task,
        createdBy: name
    };

    tasks.push(newTask);
    update();
    console.log(tasks);
    taskInput.value = "";
    nameInput.value = "";

   }

}
function remove(index){
    tasks.splice(index, 1);
    console.log(tasks);
    update();
}

function prepareEdit(index){
    const editButtonBlock = document.getElementById("editButton")
  
    taskInputEdit.value = tasks[index].task;
    nameInputEdit.value = tasks[index].createdBy;

    let editButton = document.createElement("Button");
    editButton.innerHTML = "Edit";


    editButton.onclick = function() { edit(index); };
    editButtonBlock.innerHTML = "";
    editButtonBlock.append(editButton);
    
    editBlock.style.display = "inline-block";

}

function edit(index){

    tasks[index].task = taskInputEdit.value;
    tasks[index].createdBy = nameInputEdit.value;
    update();

    editBlock.style.display = "none";

    console.log(index);
}

function update(){
    
    let newLi; 
    taskList.innerHTML = "";
    for( let i = 0; i<tasks.length; i++ ){

        newLi = document.createElement("li");
        newLi.innerHTML += `<strong>Task:</strong> ${tasks[i].task} <br>
                            <strong>Created by:</strong> ${tasks[i].createdBy} <br>
                            <button onclick="prepareEdit(${i})">edit</button>
                            <button onclick="remove(${i})">delete</button> <br> <br>`;
        taskList.appendChild(newLi);
    }
}
