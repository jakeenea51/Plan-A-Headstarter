import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VideoRoom } from "../pages/components/VideoRoom";
import { auth } from "../services/firebase";
import HeaderNavBar from "./components/HeaderNavbar";

function MeetingPage() {
  const navigate = useNavigate();
  const [joined, setJoined] = useState(false);

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
    <div className="App" align="center">
      <HeaderNavBar />
      <div className="VideoPageContainer">
        <h1>Video Call</h1>

        {!joined && (
          <button className="VideoButton" onClick={() => setJoined(true)}>
            Join Room
          </button>
        )}

        {joined && <VideoRoom />}
      </div>
    </div>
  );
}

export default MeetingPage;
