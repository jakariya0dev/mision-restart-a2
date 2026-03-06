export const addTaskIntoLocalStore = (id, tag) =>{
    const tasks = JSON.parse(localStorage.getItem(tag)) || [];
    tasks.push(id);
    localStorage.setItem(tag, JSON.stringify(tasks));
}

export const addProgressTaskIntoLocalStore = (id) => addTaskIntoLocalStore(id, "in-progress");
export const addCompletedTaskIntoLocalStore = (id) => {
    addTaskIntoLocalStore(id, "completed")
    removeTaskFromLocalStore(id, "in-progress");
};

export const getTasksFromLocalStore = (tag) =>{
    const tasks = JSON.parse(localStorage.getItem(tag)) || [];
    return tasks;
}

export const removeTaskFromLocalStore = (id, tag) =>{
    const tasks = JSON.parse(localStorage.getItem(tag)) || [];
    const updatedTasks = tasks.filter(task => task !== id);
    localStorage.setItem(tag, JSON.stringify(updatedTasks));
}