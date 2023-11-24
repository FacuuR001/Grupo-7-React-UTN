import React, { useEffect, useState } from "react";
import "./App.css";
import rocket from "./assets/img/rocket.svg"
import { TaskForm, TaskList, Contador } from "./components";

function App() {
  const [searchString, setSearchString] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState([]);

  const deleteTask = (tasksId) => {
    setTasks(tasks.filter((task) => task.id != tasksId));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    setCurrentTask(
      tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchString.toLowerCase()) ||
          task.description.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString, tasks]);

  const handleChangeSearchString = (e) => {
    setSearchString(e.target.value);
  };

  const [openModal, setOpenModal] = useState(false);
  const handleOpenNewTaskModal = () => {
    setOpenModal(true);
  };
  const handleCloseNewTaskModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="main">
      <div className="buscar-tarea">
      <div className="cabecera">
        <h1 className="h1">Lista de tareas</h1>
        <img 
          src={rocket} 
          alt="Logo" 
          className="logo"
        />
      </div>
      <Contador 
        handleOpenNewTaskModal={handleOpenNewTaskModal}
        handleChangeSearchString={handleChangeSearchString}
        handleCloseNewTaskModal={handleCloseNewTaskModal}
        openModal={openModal}
        searchString={searchString}
      />      
      

      <TaskForm addTask={addTask} />
      <TaskList tasks={currentTask} deleteTask={deleteTask} />
    </div>
    </div>
  );
}

export default App;
