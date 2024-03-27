import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utiils/PrivateRoutes";
import Login from "./components/Login";
import Register from "./components/Register";
import Document from "./components/Document";
import Help from "./components/Help";
import Forgot from "./components/Help/Forgot";
import Transaction from "./components/Transaction.jsx";
import CustomerInfo from "./components/customerInfo/index.jsx";
import SalesAnalytics from "./components/SalesAnalytics/index.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/customer" element={<CustomerInfo />} />
          <Route path="/sales" element={<SalesAnalytics />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/documents" element={<Document />} />
        <Route path="/help" element={<Help />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
}

export default App;
