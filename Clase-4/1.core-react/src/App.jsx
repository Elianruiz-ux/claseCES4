import { useState } from "react";
import app from "./App.module.css";
import FormController from "./components/FormController";
import LifeCycle from "./components/LifeCycle";
import VideoList from "./components/VideoList";
import { playListMusica, playListProgramacion } from "./data/data";

function App() {
  const [ver, setVer] = useState(false);
  return (
    <div className={`${app.container}`}>
      <div>
        <FormController></FormController>
      </div>
      <VideoList title={"Programacion"} playList={playListProgramacion} />
      <VideoList title={"Musica"} playList={playListMusica} />
      <div>
        <button onClick={() => setVer(!ver)}>
          {ver ? " ocultar" : "mostrar"}
        </button>
      </div>
      <div>{ver && <LifeCycle></LifeCycle>}</div>
    </div>
  );
}

export default App;
