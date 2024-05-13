import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Data from "../pages/data";

// const ProtectedRoute = ({ children }) => {
//   const location = useLocation();
//   const isAuthenticated = checkifUserIsAuthenticated();

//   return isAuthenticated ? (
//     children
//   ) : (
//     <Navigate to="/sign-in" state={{ from: location.pathname }} />
//   );
// };

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/home",
    element: <Home />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/register",
    element: <Register />,
    children: [],
  },
  {
    path: "/data",
    element: <Data />,
    children: [],
  },
];

const Router = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optionally, you can use smooth scrolling
    });
  }, [location]);

  return (
    <Routes>
      {routes.map((route, key) => (
        <Route key={key} path={route.path} element={route.element}>
          {route.children &&
            route.children?.map((child, key) => {
              return (
                <Route
                  path={child.path}
                  index={child.index ?? false}
                  key={key}
                  element={child.element}
                />
              ); // Nested Routes
            })}
          )
        </Route>
      ))}
    </Routes>
  );
};

export default Router;
