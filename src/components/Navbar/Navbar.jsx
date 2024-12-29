// external modules
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

// material ui
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LoginIcon from "@mui/icons-material/Login";

// internal modules
import styles from "./Navbar.module.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { userActions, userSelector } from "../../redux/reducers/userReducer";

//--------------------------------------------------------------
function Navbar() {
  const activeUser = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigateToLogin = useNavigate();

  const logout = () => {
    dispatch(userActions.setActiveUser(null));
    navigateToLogin("/login");
  };

  return (
    <>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.link}>
          <div className={styles.navLeft}>BusyBuy</div>
        </Link>

        <div className={styles.navRight}>
          <NavLink
            to="/"
            className={styles.link}
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "grey", borderRadius: "10px" }
                : null
            }
          >
            <div className={styles.btnLink}>
              <HomeIcon />
              <span>Home</span>
            </div>
          </NavLink>

          {activeUser && (
            <>
              <NavLink
                to="/orders"
                className={styles.link}
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "grey", borderRadius: "10px" }
                    : null
                }
              >
                <div className={styles.btnLink}>
                  <ShoppingBagIcon />
                  <span>Orders</span>
                </div>
              </NavLink>

              <NavLink
                to="/cart"
                className={styles.link}
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "grey", borderRadius: "10px" }
                    : null
                }
              >
                <div className={styles.btnLink}>
                  <ShoppingCartIcon />
                  <span>Cart</span>
                </div>
              </NavLink>
            </>
          )}

          {activeUser ? (
            <div className={styles.btnLink} onClick={logout}>
              <LogoutIcon />
              <span>LogOut</span>
            </div>
          ) : (
            <NavLink
              to="/login"
              style={({ isActive }) =>
                isActive
                  ? { backgroundColor: "grey", borderRadius: "10px" }
                  : null
              }
              className={styles.link}
            >
              <div className={styles.btnLink}>
                <LoginIcon />
                <span>LogIn</span>
              </div>
            </NavLink>
          )}
        </div>
      </div>
      <ToastContainer autoClose={1000} />

      <Outlet />
    </>
  );
}

export default Navbar;
