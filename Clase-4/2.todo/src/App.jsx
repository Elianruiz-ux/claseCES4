import { useState } from "react";
import style from "./App.module.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Todolist from "./components/Todolist";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  return (
    <div className={style.container}>
      <div className={style.appwrapper}>
        <Header></Header>
        <Form input={input} setInput={setInput} list={list} setList={setList} />
        <Todolist list={list} setList={setList}></Todolist>
      </div>
    </div>
  );
}

export default App;
