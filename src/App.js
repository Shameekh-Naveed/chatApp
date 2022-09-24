import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Mainbar from "./Components/Mainbar";
import Chatbar from "./Components/Chatbar";
import LoginSignup from "./Components/LoginSignup";
import Searchbar from "./Components/Searchbar";
import RouterState from "./Components/Contexts/RouterState";
import Column2 from "./Components/Column2";
import Column3 from "./Components/Column3";
// import RouterContext from './Components/Contexts/RouterContext'

function App() {
  // const {routerState} = useContext(RouterContext);
  // console.log(routerState);
  // const  location  = routerState.location;
  // Check if auth tokken exists in local storage
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("auth_tokken") !== "" &&
      localStorage.getItem("auth_tokken") !== null
  );

  if (loginStatus) {
    return (
      <RouterState>
        <div className="App grid grid-cols-19 bg-[#25262b] w-full h-screen divide-x divide-slate-100/70 ">
          <Navbar />
          <Column2 />
          <Column3/>
          {/* {(location = "msgs" && <Mainbar />)} */}
          {/* {(location = "find" && <Searchbar />)} */}
          {/* <Chatbar /> */}
        </div>
      </RouterState>
    );
  } else {
    return (
      <RouterState>
        <LoginSignup
          statusChange={() =>
            setLoginStatus(
              localStorage.getItem("auth_tokken") !== "" &&
                localStorage.getItem("auth_tokken") !== null
            )
          }
        />
      </RouterState>
    );
  }
}

export default App;
