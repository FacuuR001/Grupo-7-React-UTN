import "./EditTask.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FaRegEdit } from "react-icons/fa";

const EditTask = ({ task, handleUpdateTask }) => {
  const [open, setOpen] = React.useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title || "",
    description: task.description || "",
  });

  const handleOpen = () => {
    setEditedTask({
      title: task.title || "",
      description: task.description || "",
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTask({
      ...task,
      title: editedTask.title,
      description: editedTask.description,
    });
    handleClose();
  };

  return (
    <>
      <FaRegEdit className="edit-task" onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-editar">
          <h2 className="editar-tarea-titulo">editar tarea</h2>

          <form className="form-editar-tarea" onSubmit={handleSubmit}>
            <div className="titulo-task-editar">
              <TextField
                name="title"
                id="outlined-basic"
                label="Titulo de la tarea"
                variant="outlined"
                className="titulo-input-editar"
                value={editedTask.title}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, title: e.target.value })
                }
              />
            </div>

            <div className="descripcion-editar">
              <TextField
                name="description"
                id="outlined-basic"
                label="Ingrese una descripcion"
                variant="outlined"
                className="titulo-input-editar"
                multiline
                rows={4}
                value={editedTask.description}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, description: e.target.value })
                }
              />
            </div>

            <div className="btn-editar-tarea">
              <Button variant="contained" type="submit">
                Actualizar
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default EditTask;
