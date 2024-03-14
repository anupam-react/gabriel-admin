import { Navigate, Outlet } from "react-router-dom";
import Layout from "../Layout";
const PrivateRoutes = () => {
  // let auth = sessionStorage.getItem("token");
  let auth = true;
  return auth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes;
