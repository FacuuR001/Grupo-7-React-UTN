import "./Contador.css";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Contador = ({
  handleOpenNewTaskModal,
  handleChangeSearchString,
  handleCloseNewTaskModal,
  openModal,
  searchString,
}) => {
  return (
    <div className="contadores">
      <p className="cantidad-tareas">
        N° Tareas: <span>5</span>
      </p>
      <CiSearch className="search" onClick={handleOpenNewTaskModal} />
      {openModal && (
        <div className="buscador">
          <h2>Buscar tarea:</h2>
          <form>
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
      <p className="cantidad-pendientes">
        Pendientes: <span>3</span>
      </p>
    </div>
  );
};

export default Contador;
