import React, { useEffect, useState } from "react";
import "./App.css";
import { TaskForm, TaskList } from "./components";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function App() {
  const [searchString, setSearchString] = useState("");
  //Este es el valor real de todas las tareas actualmente
  const [tasks, setTasks] = useState([]);

  //Este es para las tareas que muestro
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
    <div className="buscar-tarea">
      <div className="cabecera">
        <h1>Lista de tareas</h1>
        <svg
          width="85"
          height="85"
          viewBox="0 0 85 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1498 81.2841H3.71598V73.8501C3.71843 71.8795 4.50246 69.9905 5.89609 68.5972C7.28972 67.2039 9.17913 66.4202 11.1498 66.4182C13.1204 66.4202 15.0098 67.2039 16.4035 68.5972C17.7971 69.9905 18.5812 71.8795 18.5836 73.8501C18.5816 75.8211 17.7978 77.711 16.4041 79.1047C15.0104 80.4983 13.1207 81.2821 11.1498 81.2841ZM11.1498 62.7005C14.106 62.7034 16.9403 63.879 19.0306 65.9693C21.121 68.0597 22.2966 70.8939 22.2996 73.8501C22.2966 76.8063 21.121 79.6408 19.0306 81.7311C16.9403 83.8215 14.106 84.9971 11.1498 85H1.85891C0.831516 85 0 84.1685 0 83.1411V73.8501C0.00293517 70.8939 1.17859 68.0597 3.26894 65.9693C5.35929 63.879 8.19357 62.7034 11.1498 62.7005ZM77.2169 32.3462C75.9512 34.9563 74.5416 37.4942 72.9947 39.9482C77.7898 51.7373 75.1289 65.0601 66.0598 74.1255C64.1688 76.0046 62.0472 77.6364 59.7457 78.9817C59.3907 79.1903 58.9765 79.2753 58.5679 79.2235C58.1593 79.1717 57.7795 78.9859 57.4877 78.6953L45.7078 66.9172C40.3879 70.2858 36.672 71.8508 36.5426 71.9062C36.2035 72.0438 35.8314 72.0786 35.4726 72.0064C35.1138 71.9341 34.7842 71.7579 34.5248 71.4997L13.4984 50.4771C13.241 50.2191 13.065 49.8913 12.9921 49.5342C12.9192 49.1772 12.9525 48.8067 13.0881 48.4684C13.1399 48.3391 14.6921 44.599 18.044 39.2514L6.30479 27.5142C6.01327 27.2221 5.82697 26.8415 5.77513 26.4321C5.72329 26.0228 5.80885 25.6079 6.01838 25.2524C7.36477 22.9533 8.99571 20.8331 10.8726 18.942C19.8734 9.94127 33.1389 7.25825 44.9003 11.9443C47.3707 10.3857 49.9273 8.96808 52.5577 7.69808C52.745 7.55567 52.9585 7.45142 53.186 7.39131C61.5973 3.41849 71.485 0.607856 83.0468 0.00361707C83.3076 -0.0109675 83.5685 0.0298722 83.8124 0.123392C84.0563 0.216912 84.2776 0.361114 84.4617 0.546326C84.6459 0.731537 84.7888 0.953584 84.8809 1.19798C84.973 1.44238 85.0124 1.70353 84.9963 1.96423C84.344 13.4725 81.5039 23.3343 77.5182 31.7309C77.4572 31.953 77.355 32.1618 77.2169 32.3462ZM63.4322 71.4979C70.8142 64.1196 73.3827 53.5464 70.417 43.7862C63.5301 53.4078 55.4274 60.2761 48.8676 64.8181L59.0731 75.0235C60.6826 73.9702 62.1424 72.7877 63.4322 71.4979ZM36.2414 67.9649C41.2435 65.5905 61.8837 54.6716 73.4585 31.596L53.3042 11.4436C30.1621 22.9925 19.3634 43.7437 17.0277 48.7513L36.2414 67.9649ZM48.3151 27.3939C50.7789 27.3964 53.1412 28.3763 54.8834 30.1185C56.6256 31.8607 57.6054 34.2229 57.6078 36.6868C57.6049 39.1503 56.6248 41.5121 54.8827 43.2538C53.1405 44.9956 50.7786 45.9751 48.3151 45.9775C45.8519 45.9746 43.4904 44.9949 41.7487 43.2532C40.007 41.5114 39.0272 39.1499 39.0242 36.6868C39.0267 34.2232 40.0063 31.8614 41.7481 30.1192C43.4898 28.3771 45.8516 27.3969 48.3151 27.3939ZM48.3151 42.2598C49.7929 42.2583 51.2098 41.6708 52.2549 40.626C53.3 39.5812 53.888 38.1645 53.89 36.6868C53.8885 35.2087 53.3007 33.7915 52.2555 32.7464C51.2104 31.7012 49.7932 31.1134 48.3151 31.1119C46.837 31.1134 45.4199 31.7012 44.3747 32.7464C43.3295 33.7915 42.7417 35.2087 42.7402 36.6868C42.7422 38.1645 43.3302 39.5812 44.3753 40.626C45.4205 41.6708 46.8373 42.2583 48.3151 42.2598ZM9.97456 25.9287L20.1302 36.0807C24.6408 29.5153 31.4666 21.4182 41.0476 14.5388C35.3322 12.8412 29.2216 13.0327 23.6236 15.0846C18.0257 17.1366 13.2389 20.9395 9.97456 25.9287ZM75.1326 28.0167C78.1852 21.0098 80.3897 12.9902 81.1399 3.85085C71.9562 4.56411 63.9108 6.73725 56.8927 9.77508L75.1326 28.0167Z"
            fill="url(#paint0_linear_42_18)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_42_18"
              x1="8499.98"
              y1="0.000537561"
              x2="0.0611646"
              y2="9807.87"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFBA05" />
              <stop offset="1" stop-color="#FF7775" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="contadores">
        <h3>
          N° Tareas: <p>5</p>
        </h3>
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
                <IoMdClose
                  className="cerrar"
                  onClick={handleCloseNewTaskModal}
                />
              </div>
            </form>
          </div>
        )}
        <h3>
          Pendientes:<p>3</p>
        </h3>
      </div>

      <TaskForm addTask={addTask} />
      <TaskList tasks={currentTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
