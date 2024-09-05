import BMICalculator from "./Component/BMICalculator/BMICalculator.jsx";
import MusicPlayer from "./Component/MusicPlayer/MusicPlayer.jsx";

function App() {
  return (
    <>
      <section>
        <div>
          <BMICalculator />
        </div>
        <div
          style={{
            backgroundColor: "#000",
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MusicPlayer />
        </div>
      </section>
    </>
  );
}

export default App;
