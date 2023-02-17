import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HeaderNavbar from "./pages/components/HeaderNavbar";
import SignOutPage from "./pages/SignOutPage";
import ErrorPage from "./pages/ErrorPage";
import HelpPage from "./pages/HelpPage";
import MeetingPage from "./pages/MeetingPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route exact path="/sign-out" element={<SignOutPage />}></Route>
        <Route exact path="/error" element={<ErrorPage />}></Route>
        <Route exact path="/help" element={<HelpPage />}></Route>
        <Route exact path="about" element={<AboutPage />}></Route>
        <Route exact path="/video-meeting" element={<MeetingPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
