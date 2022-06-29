import Weather from "./Weather";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Perth" />
    </div>
  );
}

export default App;
