import React, { useState, useEffect, useRef, useContext } from "react";
import RouterContext from "./Contexts/RouterContext";
import { io } from "socket.io-client";

const Chatbar = () => {
  const props = useContext(RouterContext);
  const socket = useRef();
  // localStorage.setItem('userId',)
  const userId = localStorage.getItem("userId");

  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    console.log(socket);
    socket.current.emit("incoming user id", userId);
  }, []);

  const addMessage = (message) => {
    setMessages(...messages, message);
  };

  const sendMessage = (target, text) => {
    const data = {
      text,
      target,
      sender: userId,
      date: new Date(),
    };
    socket.current.emit("send message", data);
    setMessages([...messages, data]); // Add message to the list of messages
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("incoming message", (data) => {
        console.log("messages before set msg", { messages });
        setMessages([...messages, data]); // Add message to the list of messages
        console.log("messages after set msg", { messages });
      });
    } 
  
    return () => {
      socket.current.off('incoming message')
    }
  })
  

  // socket.current.on("incoming message", (data) => {
  //   console.log("messages before set msg", { messages });
  //   setMessages([...messages, data]); // Add message to the list of messages
  //   console.log("messages after set msg", { messages });
  // });

  const inputField = (e) => {
    setInputVal(e.target.value);
  };
  const scrollBarStyle = {
    // Hiding the scroll bar
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* Internet Explorer 10+ */,
  };

  return (
    <div className="col-span-12 text-white px-9 py-3 border-r-4 border-white h-full">
      <div className="w-full h-8 mb-3 flex justify-between">
        <h2 className="text-2xl font-semibold inline">
          {props.userChat || "Select a user to start a chat"}
        </h2>
        <span className="ml-auto ">
          <img
            className="inline"
            src="https://img.icons8.com/material-outlined/24/000000/info--v1.png"
          />
          <img
            className="inline"
            src="https://img.icons8.com/ios/24/000000/settings--v1.png"
          />
          <img
            className="inline"
            src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png"
          />
        </span>
      </div>
      <hr className="-mx-9" />
      {/* Container to adjust spacing for messages and text bar */}
      <div
        className="container w-full flex flex-col justify-between"
        style={{
          height: "calc(100vh - 4.3rem)",
        }}
      >
        <div className="w-full overflow-y-auto" style={scrollBarStyle}>
          {messages.length >= 1 &&
            messages.map((message) => {
              return (
                <div
                  className={`msg max-w-md w-max border rounded my-2 px-2 bg-[#5a606b] border-white ${
                    userId == message.sender
                      ? "text-right ml-auto"
                      : "text-left mr-auto"
                  }`}
                >
                  <p
                    className={`text max-w-max ml-auto ${
                      userId == message.sender ? "ml-auto" : ""
                    }`}
                  >
                    {message.text}
                  </p>
                  <p
                    className={`time max-w-max ${
                      userId == message.sender ? "ml-auto" : ""
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="my-2 flex justify-between h-auto">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Write a reply"
            value={inputVal}
            onChange={inputField}
            className="rounded-sm w-2/3 h-10 text-black"
          />
          <button
            type="submit"
            className="bg-[#5561ea] h-10 rounded-sm w-24"
            onClick={() => sendMessage(props.userChat, inputVal)}
          >
            <img
              className="inline"
              src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/24/000000/external-send-social-media-interface-anggara-outline-color-anggara-putra.png"
            />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbar;
