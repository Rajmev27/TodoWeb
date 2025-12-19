import { Navigate } from "react-router-dom";

export function PrivateRoutes({ children }) {
  const auth = localStorage.getItem("regiData");
  console.log(auth);

  return auth ? children : <Navigate to="/login" />;
}
