import React from "react";
import styles from "./styles.module.css";
const LoginComp = () => {
  return (
    <div>
      <h1>Login</h1>
      <div className={styles.inputContainer}>
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
      </div>
      <button>Login</button>
    </div>
  );
};

export default LoginComp;
