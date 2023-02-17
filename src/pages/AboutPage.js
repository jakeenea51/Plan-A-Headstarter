import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import HeaderNavbar from "./components/HeaderNavbar";
import daddyFaizan from "./components/daddyFaizan.png";
import papaHelal from "./components/papaHelal.png";
import fatherRageeb from "./components/fatherRageeb.png";

const AboutPage = () => {
  const navigate = useNavigate();

  // State and Function to automatically redirect user to login page if not logged in
  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // If the user is not logged in, redirect to the login page
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <>
      <HeaderNavbar />
      <div className="CalendarContainer">
        <h1>About Us!</h1>
        <h2>Rafinal Haque</h2>
        <img src={daddyFaizan} width={100} height={100} alt="" />
        <p>
          Rafinal Haque is a current Cyber Security Systems student at St.
          John’s University and has experience in software engineering, IT
          support, and networking. He has worked on various projects, including
          creating web applications with React, HTML, CSS, and Firebase, and
          parsing resumes with Flask, HTML, and CSS. He has also gained
          practical skills and knowledge through workshops focused on
          programming, networking, and cybersecurity while interning at Cisco.
          In addition, he has received awards, including 2nd place in the
          HeadStarter Hackathon and 1st place in the AFA Cyber Patriots
          competition in NYC.
        </p>
        <h2>Jake Enea</h2>
        <img src={papaHelal} width={100} height={100} alt="" />
        <p>Is Helal British?</p>
        <p>
          Jake Enea is a Cyber Security Systems student at St. John's University
          with a 3.95 GPA. He has experience in secure software development,
          network security, and information technology, having interned at Con
          Edison Clean Energy Businesses and the New Jersey Courts. He is also
          proficient in Python, Java, Windows, Linux, iOS, Oracle Cloud, and MS
          Azure. In addition, he has completed personal projects, including
          constructing a virtual Active Directory environment and creating a
          machine learning model capable of identifying MLB pitches. He is
          currently serving as the treasurer of the St. John's University ACM
          Student Chapter and has hosted meetings demonstrating various
          penetration testing tools.{" "}
        </p>
        <h2>Omar Narine</h2>
        <img src={fatherRageeb} width={100} height={100} alt="" />
        <p>
          Omar Narine is a Computer Science student at St. John's University
          with a GPA of 3.98 and relevant coursework in software engineering,
          data structures, and database management systems. He has experience as
          a Software Engineer Fellow, a Backend Software Engineer & Business
          Intelligence, and as Co-Lead of the Google Developer Student Club. He
          also worked as a Cloud Computing Research Assistant, testing
          scheduling algorithms to decrease cloud resource idle time. Narine's
          skills include programming languages such as Python, Java, and
          JavaScript, as well as software and technical tools like AWS, Docker,
          and Git. He has developed various real-world projects and
          applications, including a Task Assignment System, an ATS Resume
          Parser, and a Cloud Resource Distribution Application.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
