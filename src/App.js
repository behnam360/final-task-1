import BMICalculator from "./Component/BMICalculator/BMICalculator.jsx";
import MusicPlayer from "./Component/MusicPlayer/MusicPlayer.jsx";
import TimeLeft from "./Component/timeLeft/timeLeft.jsx";
import LoginForm from "./Component/LoginForm/LoginForm.jsx";

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
        <div
          style={{
            backgroundColor: "#000",
            minHeight: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginForm />
        </div>
      </section>
    </>
  );
}

export default App;
