import Button from "./components/Button";
import SignUp from "./components/SignUp";
import logo from "./components/logo.png";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  //   const [user, setUser] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });

  //   const handleUserInput = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;

  //     setUser({
  //       ...user,
  //       [name]: value,
  //     });

  //   };

  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/");
  };

  return (
    <div className="SignUpPage">
      <img
        className="CenteredLogo"
        src={logo}
        width={300}
        height={100}
        alt=""
      />
      <Button
        className={"Login-Signup"}
        text={"Login"}
        onClick={onLoginClick}
      />
      <SignUp />
    </div>
  );
};

export default SignUpPage;
