import React, { useContext } from "react";
import Chatbar from "./Chatbar";
import RouterContext from "./Contexts/RouterContext";

const Column3 = () => {
  const routerState = useContext(RouterContext);
  const { userChat } = routerState;

  return <Chatbar second={userChat} />;
};

export default Column3;
