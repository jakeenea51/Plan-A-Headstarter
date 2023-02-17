import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import Calendar from "./components/Calendar";
import HeaderNavbar from "./components/HeaderNavbar";

const HomePage = () => {
  const navigate = useNavigate();

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

  return (
    <>
      <HeaderNavbar />
      <div className="CalendarContainer">
        <h1>Welcome to Plan-A Headstarter</h1>
        <h3>Below is a list of all the items on your calendar</h3>
        <Calendar />
        <p>
          Please ensure to consult your teammates before adding an event to the
          calendar!
        </p>
        <p>
          If you haven't been added to a group, please reach out via the form
          under the "Help" page
        </p>
      </div>
    </>
  );
};

export default HomePage;
