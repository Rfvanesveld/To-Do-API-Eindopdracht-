const taskText = document.getElementById("taskDescription");
const database = document.getElementById("database");

// TASK CREATION //

const createTask = async () => {
    const getTask = await getData();

    getTask.forEach(task => {
        log(task);

        const taskItem = document.createElement("li");
        taskItem.id = task._id;

        const taskLabel = document.createElement("label");
        taskLabel.innerHTML = task.description;
        taskItem.appendChild(taskLabel);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "  🗑  ";
        deleteButton.addEventListener("click", deleteTask);
        taskItem.appendChild(deleteButton);

        database.appendChild(taskItem);
    });
};
createTask();

// DELETING TASK //

const deleteTask = function (task) {
    task.target.parentNode.remove();
    const taskToDelete = task.target.parentNode;
    deleteData(taskToDelete.id);
};

// TASKDETAILS & BUTTON ACTIVATION //

document.getElementById("postButton").addEventListener("click", function () {
    const textDetails = document.getElementById("taskDescription").value;
    const newTask = { description: textDetails, done: false };
    postData(newTask);
});



