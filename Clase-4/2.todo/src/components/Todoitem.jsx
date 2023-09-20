import style from "./Todoitem.module.css";
/* eslint-disable react/prop-types */
const Todoitem = ({ id, title, completed }) => {
  return (
    <div className={style.todoItem}>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>completed: {completed ? "true" : "false"}</p>
    </div>
  );
};

export default Todoitem;
