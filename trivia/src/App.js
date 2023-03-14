import "./App.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import History from "./Component/History/History";
import Trivia from "./Component/Trivia/Trivia";
import Result from "./Component/Result/Result";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
        <Route path="/Trivia" element={<Trivia />} />
        <Route path="/Result" element={<Result />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;