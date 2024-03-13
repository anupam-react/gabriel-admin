import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utiils/PrivateRoutes";
import Login from "./components/Login";
import Register from "./components/Register";
import Document from "./components/Document";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}></Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/documents" element={<Document />} />
      </Routes>
    </div>
  );
}

export default App;
