// external modules
import { useRef } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

// internal modules
import styles from "./Login.module.css";

// custom components

// custom context
import { useAuth } from "../../components/context/authContext";

// database
import { db } from "../../firebaseInit";
import { collection, getDocs, query, where } from "firebase/firestore";

//----------------------------------
function Login() {
  const { setActiveUser } = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginUser = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const currentUser = await geUserByEmail(email);

    if (!currentUser) {
      toast.warn("User is not registered !!");
      return;
    }

    // check for password
    if (currentUser.password !== password) {
      toast.error("Wrong Password !!");
      return;
    }

    setActiveUser(currentUser);

    toast.success(`Welcome ${currentUser.name}`);
    navigate("/");
  };

  const geUserByEmail = async (email) => {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length === 0) {
      return false;
    } else {
      return querySnapshot.docs[0].data();
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Sign In</h1>
        <input
          type="text"
          placeholder="Enter Your Email"
          className={styles.input}
          ref={emailRef}
        />
        <input
          type="text"
          placeholder="Enter Your Password"
          className={styles.input}
          ref={passwordRef}
        />

        <button className={styles.btn} onClick={loginUser}>
          Sign In
        </button>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <span className={styles.secondaryText}>SignUp?</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
