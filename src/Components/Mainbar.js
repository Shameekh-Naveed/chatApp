import React, { useState, useEffect, useContext } from "react";
import RouterContext from "./Contexts/RouterContext";

const Mainbar = () => {
  const routerState = useContext(RouterContext);
  const { setUserChat } = routerState;
  const [friends, setFriends] = useState([]);
  // Retrieves all the friends of current user
  const getFriends = async () => {
    const host = "http://localhost:5050";
    const url = `${host}/auth/getFriends`;
    const auth_tokken = localStorage.getItem("auth_tokken");
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ auth_tokken }),
    });
    const response = await res.json();
    if (response.status) {
      const tempFriendId = [...response.friends]; // Make a temporary array to store the friend IDs from response
      if (tempFriendId.length >= 1) {
        tempFriendId.forEach((friendID) => {
          getInfo({ query: friendID });
        });
      }
    } else {
      alert(response.msg);
    }
  };

  // Retrieve information about the previously retrieved friends
  const getInfo = async (body) => {
    const host = "http://localhost:5050";
    const url = `${host}/auth/getUser`;
    try {
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const response = await res.json();
      if (response.status) {
        let friendsArray = [...friends]; //Temporary copy of the Array in friends state
        // console.log({friendsArray})
        const responseData = {
          name: response.name,
          email: response.email,
          id: response.id,
        };
        // console.log({responseData})
        friendsArray.push(responseData);
        // console.log({friendsArray},"the second coming")
        setFriends(friendsArray);
        // setFriends(...friends, {
        //   name: response.name,
        //   email: response.email,
        //   id:response.id,
        // });

        // console.log(friends,"line 56 Mainbar.js");
      } else {
        alert(response.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  const scrollBarStyle = {
    // Hiding the scroll bar
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* Internet Explorer 10+ */,
  };
  return (
    // <div className='w-96'>he</div>
    <div
      className="col-span-5 flex flex-col text-white px-9 py-3 h-full overflow-y-auto"
      style={scrollBarStyle}
    >
      <div className="section mt-2 mb-4">
        <h2 className="text-2xl font-semibold">Chat Room</h2>
      </div>
      <div className="section my-3">
        <h4 className="my-2 font-semibold text-base">Favourites</h4>
        <ul className="text-slate-400 text-base">
          <li className="my-2 py-1 cursor-pointer  hover:text-white active:text-white">
            <img
              className="inline mr-5"
              src="https://img.icons8.com/ios/27/000000/user-male-circle.png"
            />
            Person C
          </li>
        </ul>
      </div>
      <div className="section my-3">
        <h4 className="my-2 font-semibold text-base">Direct Messages</h4>
        <ul className="text-slate-400 text-base">
          {friends.length >= 1 &&
            friends.map((friend) => {
              return (
                <li
                  className="my-2 py-1 cursor-pointer  hover:text-white active:text-white"
                  onClick={() => {
                    setUserChat(friend.id);
                  }}
                  key={friend.id}
                >
                  <img
                    className="inline mr-5"
                    src="https://img.icons8.com/ios/27/000000/user-male-circle.png"
                  />
                  {friend.name || "temp"}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Mainbar;
