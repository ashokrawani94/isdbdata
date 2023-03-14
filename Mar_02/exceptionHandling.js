var uname;
var saveName = () => {
    uname = document.querySelector("#uname").value;
    document.querySelector("#uname").value = ''; // clearing text
}

var createTaskBlock = () => {
    var divTag = document.createElement("div");
    divTag.setAttribute("id", 'taskContainer');
    divTag.classList.add("taskBlock"); // divTag.setAttribute("class", "taskBlock");
    document.querySelector(".tConainer").append(divTag);
}

var showTask = () => {
    var task = getRandomTask();
    task  = 'Mr. ' + uname + ' : ' + task;
    try {
        document.querySelector("#taskContainer").innerHTML = task;
    } catch(error) {
       alert("Boss you missed to crete a task container");
    } finally {
        setTimeout(() => {
            document.querySelector(".welcomeBlock").style.display = 'block';
        }, 3000);    
    }
}

var getRandomTask = () => {
    var taskList = [
        "Do the project Review",
        "Do the complete code review of User application",
        "Implement new user access module",
        "Implement logging mechanism to SAles module",
        "Give th training on Angular and React"
    ];
    var randomIndex = Math.floor(Math.random() * taskList.length)
    return taskList[randomIndex];
}