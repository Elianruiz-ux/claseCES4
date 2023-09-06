import app from "./App.module.css";
import VideoList from "./components/VideoList";
import { playListMusica, playListProgramacion } from "./data/data";

function App() {
  return (
    <div className={`${app.container}`}>
      <VideoList title={"Programacion"} playList={playListProgramacion} />
      <VideoList title={"Musica"} playList={playListMusica} />
    </div>
  );
}

export default App;
