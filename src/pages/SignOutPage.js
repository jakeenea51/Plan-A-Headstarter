import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { useEffect } from "react";

// Blank page that'll handle the functionality of signing out a user
const SignOutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const signOut = async () => {
      try {
        await auth.signOut();
        console.log("Attempting to sign you out");
        navigate("/"); // redirect to login page after sign out
      } catch (error) {
        console.error(error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If there is an active user, sign them out
        signOut();
        console.log("Signed You Out!");
      } else {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return <div></div>;
};

export default SignOutPage;
