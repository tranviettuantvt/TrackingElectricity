import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tracking from "./page/Tracking";
import DashBoard from "./sub_page/DashBoard";
import Analysis from "./sub_page/Analysis";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tracking />}>
          <Route index element={<Analysis />} />
          <Route path="analysis" element={<DashBoard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
