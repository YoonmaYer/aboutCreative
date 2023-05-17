let taskInput=document.getElementById("task-input")
let addButton=document.getElementById("add-button")
let taskList=[]
addButton.addEventListener("click", addTask)


function addTask(){
    let task={
        id:randomIDGenerate(),
        taskContent : taskInput.value,
        isComplete: false
    }
    
    taskList.push(task)
    console.log(taskList)
    render();
   
}

function render(){
    let resultHtml=''
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].isComplete==true){

            resultHtml +=`
            <div class="task">
                <div class="task-done">${taskList[i].taskContent}</div>

                <div>
                    <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                    <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
                </div>
            </div>`
        }else{
            resultHtml +=`
            <div class="task">
                <div>${taskList[i].taskContent}</div>

                <div>
                    <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                    <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
                </div>
            </div>`
        }


      
    }
    document.getElementById("task-board").innerHTML=resultHtml;

}

function toggleComplete(id){
    console.log("id: ",id)
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id==id){
            taskList[i].isComplete=!taskList[i].isComplete;
            break;
        }
    }
    console.log(taskList)
    render()
}

function randomIDGenerate(){
    return Math.random().toString(36).substr(2, 16);

}

function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id==id){
            taskList.splice(i,1)
            break;
        }
    }
    console.log(taskList)
    render()
}