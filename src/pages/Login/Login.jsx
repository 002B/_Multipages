import { useRef } from "react";
import Form from "react-bootstrap/Form";


import { verifyUser } from "../../Data/User.jsx";

import "./Login.css";
import { Navigate } from "react-router";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        placeholder="users"
        style={{ textAlign: "center" }}
        ref={userRef}
      />

      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        placeholder="1234"
        style={{ textAlign: "center" }}
        ref={passRef}
      />
      <div>
        <button
          className="btn btn-success mt-3"
          onClick={() => {
            const user = userRef.current.value.trim();
            const pass = passRef.current.value.trim();
            userRef.current.value = "";
            passRef.current.value = "";
            const userInfo = verifyUser(user, pass);
            if (userInfo === null) {
              alert("Wrong username or password");
              userRef.current.focus();
            } else {
              setToken(userInfo.token);
              setRole(userInfo.role);
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
