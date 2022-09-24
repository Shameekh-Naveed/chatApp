import React, { useContext } from "react";
import RouterContext from "../Components/Contexts/RouterContext";
// src\Components\Contexts\RouterContext.js
import Mainbar from "./Mainbar";
import Searchbar from "./Searchbar";

const Column2 = () => {
  const routerState = useContext(RouterContext);
  const location  = routerState.location;

  if (location == "msgs") {
    return <Mainbar />;
  } else {
    return <Searchbar />;
  }
};

export default Column2;
