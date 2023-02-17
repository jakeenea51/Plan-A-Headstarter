import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/user";
import { auth } from "../../services/firebase";

const Login = () => {
  const navigate = useNavigate();

  // State and function to handle and store when user login info entered
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // State and Function to prevent access to signup and redirect to home page when user is logged in
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setLoggedIn(user));

    if (loggedIn) {
      navigate("/home");
    }

    return () => unsub();
  }, [loggedIn, setLoggedIn, navigate]);

  // Function to handle the login of the user
  const onLoginClick = async (e) => {
    e.preventDefault();
    try {
      await loginUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="LoginContainer">
      <form className="LoginForm">
        <h1>Login</h1>
        <div>
          <label>Username (Email): </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your username (email)"
            onChange={handleUserInput}
            className="LoginField"
          ></input>
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleUserInput}
            className="LoginField"
          ></input>
        </div>
        <div>
          <Button
            className={"SubmitButton"}
            text={"Login"}
            onClick={onLoginClick}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
