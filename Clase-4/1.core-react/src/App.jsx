import "./App.css";
import VideoItem from "./components/VideoItem";
import VideoList from "./components/VideoList";

function App() {
  return (
    <div>
      <VideoList title={"Programación"}>
        <VideoItem
          title={"java"}
          date={"10/06/2003"}
          description={"una gran pelicula de java"}
          duration={"90 minutos"}
        />
      </VideoList>
      <VideoList title={"Música"}>
        <VideoItem
          title={"rock"}
          date={"10/06/2003"}
          description={"una gran pelicula de rock"}
          duration={"90 minutos"}
        />
      </VideoList>
    </div>
  );
}

export default App;
