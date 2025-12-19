import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/register";
import { AllTodos } from "./pages/AllTodos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoutes } from "./authGaurd/PrivateRoutes";
import Layout from "./layout/Layout";
import { DynaimcData } from "./pages/DynamicData";
import ErrorPage from "./pages/ErrorPage";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            {" "}
            <About />
          </PrivateRoutes>
        ),
      },
      { path: "/alltodos", element: <AllTodos /> },
      { path: "/details/:id", element: <DynaimcData /> },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
