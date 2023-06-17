import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes = {458}
          messages = {264}
          share = {327}
          name = "Marcos GG"
          description = "Gato + Goleiro = Gatoleiro"
          music = "Epic Music"
          url = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
          />
        <Video
          likes = {678}
          messages = {179}
          share = {891}
          name = "EBAC Online"
          description = "Video provido 02"
          music = "Clap your hands"
          url = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;
