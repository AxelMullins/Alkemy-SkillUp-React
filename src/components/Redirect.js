import { Navigate } from "react-router-dom";

const Redirect = () => {
  let token = sessionStorage.getItem("token");
  return <>{!token && <Navigate to="/" />}</>;
};

export default Redirect;
