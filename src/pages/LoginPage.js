import Login from "./components/Login";
import Button from "./components/Button";
import logo from "./components/logo.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="LoginPage">
      <img
        src={logo}
        width={300}
        height={100}
        className="CenteredLogo"
        alt=""
      />
      <Login />
      <Button
        className={"Login-Signup"}
        text={"Sign Up"}
        onClick={onSignUpClick}
      />
    </div>
  );
};

export default LoginPage;
