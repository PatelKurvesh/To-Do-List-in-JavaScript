const addTaskBtn = document.getElementById("addtask");
const taskField = document.getElementById("task");
const recordsDisplay = document.getElementById("records")


let taskArray = [];

let objStr = localStorage.getItem('users');
if(objStr!=null){

    taskArray = JSON.parse(objStr); 
}
DisplayInfo();

addTaskBtn.onclick=()=>{
    const text = taskField.value;
    taskArray.push({'task':text})
    SaveInfo(taskArray);
    taskField.value=" ";
    DisplayInfo();
}

 
function SaveInfo(taskArray){
    let str = JSON.stringify(taskArray);
    localStorage.setItem('users', str);
}

function DisplayInfo(){
    let statement =" ";
    taskArray.forEach ((user,i) => {
        statement += `<tr>
        <th scope="row">${i+1}</th>
        <td>${user.task}</td>
        <td><i class="btn fa fa-edit btn-success text-white mx-2 onclick="EditInfo(${i})"></i> 
        <i class="fa fa-trash btn text-white btn-danger onclick="DeleteInfo(${i}) "></i></td>
      </tr>`
    });
    recordsDisplay.innerHTML=statement; 

 

}

function EditInfo(){

}

function DeleteInfo(){

}