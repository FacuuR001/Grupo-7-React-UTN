import React, { useState } from "react";
import "./TaskForm.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 600,
//   height: 350,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   padding: "2rem",
//   borderRadius: 6,
// };

const TaskForm = ({ addTask }) => {
  const [open, setOpen] = React.useState(false); /* */
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddNewTask = (e) => {
    e.preventDefault();
    const { title, description } = e.target;
    if (title.value && description.value) {
      addTask({
        title: title.value,
        description: description.value,
        id: Math.random() + title.value,
        createdAt: new Date().toTimeString(),
      });
    }
    handleClose();
  };

  return (
    <div className="principal">
      <Button
        variant="contained"
        onClick={handleOpen}
        className="nuevatarea"
        style={{ marginBottom: "2rem" }}
      >
        agregar tarea +
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box className="modal-agregar">
          <h2 className="agregar-tarea-titulo">agregar tarea</h2>

          <form className="form-nueva-tarea" onSubmit={handleAddNewTask}>
            <div className="titulo-task">
              <TextField
                name="title"
                id="outlined-basic"
                label="Titulo de la tarea"
                variant="outlined"
                className="titulo-input"
              />
            </div>

            <div className="descripcion">
              <TextField
                name="description"
                id="outlined-basic"
                label="Ingrese una descripcion"
                variant="outlined"
                className="titulo-input"
                multiline
                rows={4}
              />
            </div>

            <div className="btn-agregar-tarea">
              <Button variant="contained" type="submit">
                Agregar
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default TaskForm;
