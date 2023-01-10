import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div>
        {/* Sidebar */}
        <Sidebar />
      </div>
      <div>
        {/* Home */}
        <Home />
      </div>
    </div>
  );
}

export default App;
