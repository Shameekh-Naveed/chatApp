import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Mainbar from "./Components/Mainbar";
import Chatbar from "./Components/Chatbar";
import LoginSignup from "./Components/LoginSignup";
import Searchbar from "./Components/Searchbar";

function App() {
  // Check if auth tokken exists in local storage
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("auth_tokken") !== "" &&
      localStorage.getItem("auth_tokken") !== null
  );

  // useEffect(() => {

  // }, [loginStatus]);

  if (loginStatus) {
    return (
      <div className="App grid grid-cols-19 bg-[#25262b] w-full h-screen divide-x divide-slate-100/70 ">
        <Navbar />
        {/* <Mainbar /> */}
        {/* <Searchbar /> */}
        <Chatbar />
      </div>
    );
  } else {
    return (
      <LoginSignup
        statusChange={() =>
          setLoginStatus(
            localStorage.getItem("auth_tokken") !== "" &&
              localStorage.getItem("auth_tokken") !== null
          )
        }
      />
    );
  }
}

export default App;
