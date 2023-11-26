import "./Contador.css";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Contador = ({
  handleOpenNewTaskModal,
  handleChangeSearchString,
  handleCloseNewTaskModal,
  openModal,
  searchString,
  tasks,
}) => {
  // Obtener la cantidad total de tareas
  const totalTasks = tasks.length;

  // Filtrar tareas pendientes (sin completar)
  const pendingTasks = tasks.filter((task) => !task.completed);
  const totalPendingTasks = pendingTasks.length;

  return (
    <div className="contadores">
      <div className="contadores-contenedor">
        <p className="cantidad-tareas">
          N° Tareas: <span>{totalTasks}</span>
        </p>
        <CiSearch className="search" onClick={handleOpenNewTaskModal} />
        <p className="cantidad-pendientes">
          Pendientes: <span>{totalPendingTasks}</span>
        </p>
      </div>
      {openModal && (
        <div className="buscador">
          <form className="buscador-form">
            <input
              placeholder="Buscar tarea"
              onChange={handleChangeSearchString}
              value={searchString}
            />
            <div>
              <IoMdClose className="cerrar" onClick={handleCloseNewTaskModal} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contador;
