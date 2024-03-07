import "./App.scss";
import ContLateral from "./componentes/cont-lateral";
import ContCentral from "./componentes/cont-central";

function App() {
  return (
    <div className="App">
      <div className="Global-Container">
        <div className="lateral-bar">
          <ContLateral />
        </div>
        <div className="central-content">
          <ContCentral />
        </div>
      </div>
    </div>
  );
}

export default App;
