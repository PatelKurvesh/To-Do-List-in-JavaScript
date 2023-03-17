const addTaskBtn = document.getElementById("addtask");
const btnText = addTaskBtn.innerText;
const taskField = document.getElementById("task");
const recordsDisplay = document.getElementById("records")


let edit_id = null;
let taskArray = [];

let objStr = localStorage.getItem('users');
if(objStr!=null){

    taskArray = JSON.parse(objStr); 
}
DisplayInfo();

addTaskBtn.onclick=()=>{
    const text = taskField.value;
    if(edit_id!=null){

        taskArray.splice(edit_id,1,{'task':text});
        edit_id=null;
    }else{
        
        taskArray.push({'task':text})
    }
    SaveInfo(taskArray);
    taskField.value=" ";
    
    addTaskBtn.innerText = btnText;
}

 
function SaveInfo(taskArray){
    let str = JSON.stringify(taskArray);
    localStorage.setItem('users', str);
    DisplayInfo();
}

function DisplayInfo(){
    let statement =" ";
    taskArray.forEach ((user,i) => {
        statement += `<tr>
        <th scope="row">${i+1}</th>
        <td>${user.task}</td>
        <td><i class="btn fa fa-edit btn-success text-white mx-2 " onclick='EditInfo(${i})'></i> 
        <i class="fa fa-trash btn text-white btn-danger" onclick='DeleteInfo(${i})'></i></td>
      </tr>`
    });
    recordsDisplay.innerHTML=statement; 

 

}

function EditInfo(id){
    // alert(id);
    edit_id = id;
    taskField.value = taskArray[id].task;
    addTaskBtn.innerText="Save Changes"


}

function DeleteInfo(id){
    // alert(id);
    taskArray.splice(id,1);
    SaveInfo(taskArray);
    
}