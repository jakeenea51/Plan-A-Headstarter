import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import { auth } from "../services/firebase";
import HelpfulYasin from "./components/HelpfulYasin.png";
import HeaderNavbar from "./components/HeaderNavbar";

const HelpPage = () => {
  const navigate = useNavigate();

  // State and Function to hold the user's input in the complaint form
  const [complaint, setComplaint] = useState({
    email: "",
    complaint: "",
  });
  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setComplaint({
      ...complaint,
      [name]: value,
    });
  };

  // State and Function to automatically redirect user to Login page if not logged in
  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // If the user is not logged in, redirect to the login page
        navigate("/");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const onSubmitClick = async (e) => {
    console.log("Submitting Form");
  };

  return (
    <>
      <HeaderNavbar />
      <div className="HelpPage">
        <h1>Are you stuck?</h1>
        <h3>We have people here to help!</h3>
        <img src={HelpfulYasin} width={450} height={550} alt=""></img>
        {/* A user help submission form */}
        <form className="ContactForm">
          <h3>Conact / Help Form</h3>
          <h5>
            Please fill out the form below and one of the Headstarter team
          </h5>
          <h5>members will get back to you soon!</h5>
          <div>
            <label>Contact Email: </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleUserInput}
              className="ComplaintField"
            ></input>
          </div>
          <div>
            <label>Complaint: </label>
            <input
              name="complaint"
              type="text"
              placeholder="Please describe your issue "
              onChange={handleUserInput}
              className="ComplaintField-2"
            ></input>
          </div>
          <div>
            <Button
              className={"SubmitButton"}
              text={"Submit"}
              onClick={onSubmitClick}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default HelpPage;
