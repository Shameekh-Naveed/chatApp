import React, { useState, createContext } from "react";
import RouterContext from "./RouterContext";

// const RouterContext = createContext();
const RouterState = (props) => {
  const host = "http://localhost:5050";
  const [location, setLocation] = useState("");
  const [userChat, setUserChat] = useState("");
  // const changeLocation = (target) => {
  //   setLocation(target);
  // };
  return (
    <RouterContext.Provider
      value={{ location, setLocation, host, userChat, setUserChat }}
    >
      {props.children}
    </RouterContext.Provider>
  );
};

//  RouterState;
// export { RouterContext, RouterState };
export default RouterState;
