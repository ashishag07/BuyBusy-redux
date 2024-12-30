// css styling
import "./App.css";

// custom components
import Navbar from "./components/Navbar/Navbar";

// custom pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";

// custom context
import OrderProvider from "./components/context/orderContext";

// redux
import { useSelector } from "react-redux";
import { userSelector } from "./redux/reducers/userReducer";

// react router
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//******************************************************************** */
// App component start
function App() {
  const activeUser = useSelector(userSelector);

  // private route
  const PrivateRoute = ({ children }) => {
    return activeUser ? children : <Navigate to="/login" replace={true} />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <OrderProvider>
      <RouterProvider router={router} />
    </OrderProvider>
  );
}

export default App;
