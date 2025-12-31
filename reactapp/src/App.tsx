import { Routes, Route } from "react-router-dom";
import "./App.css";
import ReactMemo from "./components/componentrenderingoptimization/ReactMemo";
import UseMemo from "./components/componentrenderingoptimization/UseMemo";
import UseCallbackDemo from "./components/componentrenderingoptimization/useCallback";

function App() {
  return (
    <Routes>
      <Route path="/usememo" element={<UseMemo/>} />
      <Route path="/usecallback" element={<UseCallbackDemo/>} />

      <Route path="/reactmemo" element={<ReactMemo />} />
    </Routes>
  );
}

export default App;
