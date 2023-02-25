import { Routes, Route, Link } from "react-router-dom";
import CoursesPage from "./CoursesPage";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CoursesPage />} />

      </Routes>
    </div>
  );
}

export default App;
