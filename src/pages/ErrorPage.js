import { Link } from "react-router-dom";
import LateYasin from "./components/LateYasin.jpg";
import "../App.css";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <img src={LateYasin} width={400} height={550} alt=""></img>
      <h1>Page Not Found!</h1>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default ErrorPage;
