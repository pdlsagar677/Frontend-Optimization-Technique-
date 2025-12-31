import { Routes, Route } from "react-router-dom";
import "./App.css";
import ReactMemo from "./components/componentrenderingoptimization/ReactMemo";

function App() {
  return (
    <Routes>
      <Route path="/reactmemo" element={<ReactMemo />} />
    </Routes>
  );
}

export default App;
