import { useState } from "react";
import style from "./Todoitem.module.css";
/* eslint-disable react/prop-types */
const Todoitem = ({ id, title, completed, setList, list }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCompletar = () => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setList(updatedList);
  };

  const handleEditar = () => {
    setIsEditing(true);
  };

  const handleGuardar = () => {
    // Guardar los cambios del título editado
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, title: editedTitle };
      }
      return item;
    });
    setList(updatedList);

    // Desactivar el modo de edición
    setIsEditing(false);
  };

  const handleEliminar = () => {
    // Filtrar el elemento a eliminar
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <div className={style.todoItem}>
      <p>ID: {id}</p>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <p>Title: {title}</p>
      )}
      <p>Completed: {completed ? "true" : "false"}</p>
      <button onClick={handleCompletar}>Completar</button>
      {isEditing ? (
        <button onClick={handleGuardar}>Guardar</button>
      ) : (
        <button onClick={handleEditar}>Editar</button>
      )}
      <button onClick={handleEliminar}>Eliminar</button>
    </div>
  );
};

export default Todoitem;
