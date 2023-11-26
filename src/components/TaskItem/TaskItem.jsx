import React, { useState } from "react";
import "./TaskItem.css";
import { FiCheckSquare } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
// import { FaRegEdit } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditTask from "../EditTask/EditTask";

const TaskItem = ({ task, deleteTask, handleCheckClick, handleUpdateTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckTask = () => {
    setCompleted(!completed);
    handleCheckClick(task.id);
  };

  return (
    <div className="taskitem">
      <Accordion className="acordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FiCheckSquare
            className={`check ${completed ? "completed-check" : ""}`}
            onClick={handleCheckTask}
          />
          <Typography
            className={`task-title ${completed ? "completed-typography" : ""}`}
          >
            {task.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className={completed ? "completed-typography-description" : ""}
          >
            {task.description}
          </Typography>
          <FaRegWindowClose
            className="delete-task"
            onClick={() => deleteTask(task.id)}
          />
          <EditTask task={task} handleUpdateTask={handleUpdateTask} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TaskItem;
