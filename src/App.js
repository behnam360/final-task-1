import BMICalculator from "./Component/BMICalculator/BMICalculator.jsx";
import MusicPlayer from "./Component/MusicPlayer/MusicPlayer.jsx";
import TimeLeft from "./Component/timeLeft/timeLeft.jsx";

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
        <div>
          <TimeLeft />
        </div>
      </section>
    </>
  );
}

export default App;
