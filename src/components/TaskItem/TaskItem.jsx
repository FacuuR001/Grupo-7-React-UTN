import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <div className="taskitem">
      <FiCheckSquare />
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <FaRegWindowClose onClick={() => deleteTask(task.id)} />

      <hr />
    </div>
  );
};

export default TaskItem;
