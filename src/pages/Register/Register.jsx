// external modules
import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// internal modules
import styles from "./Register.module.css";

// database
import { db } from "../../firebaseInit.js";
import { addDoc, collection } from "firebase/firestore";

//-----------------------------------------------------
function Register() {
  const navigate = useNavigate();

  const nameRef = useRef("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const registerUser = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // add documnt to database

    const docRef = addDoc(collection(db, "users"), { name, email, password });
    toast.success("Registered Successfully !!");
    clearInput();
    navigate("/login");
  };

  const clearInput = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Sign Up</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className={styles.input}
          ref={nameRef}
        />

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
        <button className={styles.btn} onClick={registerUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Register;
