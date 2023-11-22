import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="no-tareas">
      {tasks.length === 0 ? (
        <h2>Aun no has agregado tareas.</h2>
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              deleteTask={deleteTask}
            ></TaskItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
