import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenNewTaskModal = () => {
    setOpenModal(true);
  };
  const handleCloseNewTaskModal = () => {
    setOpenModal(false);
  };

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
    handleCloseNewTaskModal();
  };
  return (
    <div className="principal">
      <button className="nuevatarea" onClick={handleOpenNewTaskModal}>
        {" "}
        AGREGAR TAREA +{" "}
      </button>
      {openModal && (
        <div className="modal-background">
          <div className="modal">
            <h2>Agregar nueva Tarea</h2>
            <form onSubmit={handleAddNewTask}>
              <div className="titulo">
                <input placeholder="titulo ejemplo" id="title" name="title" />
              </div>

              <div className="descripcion">
                <textarea
                  placeholder="descripcion"
                  id="description"
                  name="description"
                ></textarea>
              </div>

              <div className="botones">
                <button>Agregar</button>
                <button onClick={handleCloseNewTaskModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
