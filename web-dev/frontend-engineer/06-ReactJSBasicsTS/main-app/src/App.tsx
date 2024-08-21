import { useState } from "react";

import "./App.css";

// components
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Form from "./components/Form";
import UserDetails from "./components/UserDetails";

function App() {
  const companyName = "Atom";
  const aboutTxt = "About Us";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    address: "",
    email: "",
    password: "",
  });

  return (
    <>
      <Heading title="ATOM project">
        <span>(child) </span>
      </Heading>
      <Navbar
        companyName={companyName}
        aboutTxt={aboutTxt}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* Form */}
      {isLoggedIn ? (
        <>
          <h1>WELCOME TO HOME!!!</h1>
          <UserDetails user={userData} />
        </>
      ) : (
        <Form
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;
