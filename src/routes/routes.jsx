import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Data from "../pages/data";
import Booking from "../pages/booking";
import WrongSearch from "../pages/wrongsearch";
import About from "../pages/about";
import Terms from "../pages/Terms";
import Help from "../pages/help";
import AvailableTickets from "../pages/availav";


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
  {
    path: "/booking",
    element: <Booking />,
    children: [],
  },
  {
    path: "/wrong_search",
    element: <WrongSearch />,
    children: [],
  },
  {
    path: "/about",
    element: <About />,
    children: [],
  },
  {
    path: "/terms",
    element: <Terms />,
    children: [],
  },
  {
    path: "/help",
    element: <Help />,
    children: [],
  },
  {
    path: "/buy",
    element: <AvailableTickets />,
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
