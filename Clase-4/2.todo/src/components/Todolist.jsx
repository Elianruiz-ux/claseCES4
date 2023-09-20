/* eslint-disable react/prop-types */
import Todoitem from "./Todoitem";

const Todolist = ({ list, setList }) => {
  return (
    <div>
      {list?.map((li, index) => (
        <Todoitem key={index} {...li} list={list} setList={setList} />
      ))}
    </div>
  );
};

export default Todolist;
