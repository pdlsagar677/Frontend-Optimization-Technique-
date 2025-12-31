import { Routes, Route } from "react-router-dom";
import "./App.css";
import ReactMemo from "./components/componentrenderingoptimization/ReactMemo";
import UseMemo from "./components/componentrenderingoptimization/UseMemo";
import UseCallbackDemo from "./components/componentrenderingoptimization/useCallback";
import DandT from "./components/Debouncingand throttling /DandT";
import UserDashboard from "./components/statemanagementoptimization/Statemgntopt";

function App() {
  return (
    <Routes>
      <Route path="/usememo" element={<UseMemo/>} />
      <Route path="/usecallback" element={<UseCallbackDemo/>} />
      <Route path="/reactmemo" element={<ReactMemo />} />
      <Route path="/dandt" element={<DandT />} />
      <Route path="/statemgntopt" element={<UserDashboard />} />

    </Routes>
  );
}

export default App;
