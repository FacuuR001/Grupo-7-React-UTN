import React from "react";
import "./TaskItem.css";
import { FiCheckSquare } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <div className="taskitem">
      {/* <FiCheckSquare className="check" />
      <div className="tareas">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>

      <FaRegWindowClose
        className="borrar"
        onClick={() => deleteTask(task.id)}
      /> */}

      <Accordion className="acordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FiCheckSquare className="check" />
          <Typography>{task.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{task.description}</Typography>
          <FaRegWindowClose
            className="delete-task"
            onClick={() => deleteTask(task.id)}
          />
          <FaRegEdit className="edit-task" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TaskItem;
