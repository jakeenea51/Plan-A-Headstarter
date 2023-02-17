import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/user";
import { auth } from "../../services/firebase";

// NOTES:
// - The confirm password field isn't functioning yet
// - The sign up submission currently leads to the log in page
const SignUp = () => {
  const navigate = useNavigate();

  // To be used in the case of a failed registration attempt
  // const [registrationStatus, setRegistrationStatus] = useState(true);

  // State and Function to prevent access to signup and redirect to home page when user is logged in
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setLoggedIn(user));

    if (loggedIn) {
      navigate("/home");
    }

    return () => unsub();
  }, [loggedIn, setLoggedIn, navigate]);
  // State and Function to update and store user info when changes to field are detected
  const [user, setUser] = useState({
    name: "",
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

  // Function to handle the registration of user
  const onSignUpClick = async (e) => {
    e.preventDefault();
    try {
      await registerUser(user);
      // Comment out this in the future:
      console.log("User Registered: ", user);
      navigate("/");
    } catch (error) {
      console.log("Error trying to register user");
      console.error(error);
    }
  };

  return (
    <div className="SignUpContainer">
      <h1>Sign Up Form</h1>
      <form className="SignUpForm">
        <div>
          <label>Name:</label>
          <input
            name="name"
            placeholder="Enter your name"
            type="text"
            onChange={handleUserInput}
            className="SignUpField"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={handleUserInput}
            className="SignUpField"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            placeholder="Create your password"
            type="password"
            onChange={handleUserInput}
            className="SignUpField"
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            name="passwordCheck"
            placeholder="Reenter your password"
            type="password"
            className="SignUpField"
          />
        </div>
        <div>
          <Button
            className={"SubmitButton"}
            text={"Sign Up"}
            onClick={onSignUpClick}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
