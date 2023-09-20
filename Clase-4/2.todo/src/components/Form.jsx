/* eslint-disable react/prop-types */
import style from "./Form.module.css";
import uuid4 from "uuid4";

const Form = ({ input, list, setInput, setList }) => {
  const handleAdd = (e) => {
    e.preventDefault();

    const newList = {
      id: uuid4(),
      title: input,
      completed: false,
    };

    console.log(input);

    setList([...list, newList]);
    setInput("");
  };

  console.log(list);

  return (
    <form onSubmit={handleAdd}>
      <input
        className={style.taskInput}
        type="text"
        name="task"
        placeholder="enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={style.button} type="submit" disabled={!input}>
        add
      </button>
    </form>
  );
};

export default Form;
