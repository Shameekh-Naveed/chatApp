import React,{useState} from "react";

const Chatbar = () => {

  const [inputVal, setInputVal] = useState('')

  const inputField = (e) => {
    setInputVal(e.target.value)
  }

  let user = "Name of Chat";
  return (
    <div className="col-span-12 text-white px-9 py-3 border-r-4 border-white">
      <div className="w-full mb-3 flex justify-between">
        <h2 className="text-2xl font-semibold inline">{user}</h2>
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
      <div className="container w-full flex flex-col justify-between">
        <div className="w-full border-2">
          {/* <div className={`msg max-w-md border border-white text-right ml-auto ${msg.meta.user == user?'ml-auto':'mr-auto'}`}> */}
          <div className='msg max-w-md w-max border rounded my-2 px-2 bg-[#5a606b] border-white text-right ml-auto'>
            <p className="text max-w-max ml-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque aliquid </p>
            <p className="time max-w-max ml-auto">19:22</p>
          </div>
          <div className='msg max-w-md w-max border rounded my-2 px-2 bg-[#5a606b] border-white text-left mr-auto'>
            <p className="text max-w-max">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque aliquid </p>
            <p className="time max-w-max ">19:22</p>
          </div>
          <div className='msg max-w-md w-max border rounded my-2 px-2 bg-[#5a606b] border-white text-right ml-auto'>
            <p className="text max-w-max ml-auto">Lorem ipsum elit. Tenetur neque aliquid </p>
            <p className="time max-w-max ml-auto">19:22</p>
          </div>
          <div className='msg max-w-md w-max border rounded my-2 px-2 bg-[#5a606b] border-white text-left mr-auto'>
            <p className="text max-w-max">Lorem . Tenetur neque aliquid </p>
            <p className="time max-w-max ">19:22</p>
          </div>
          
        </div>
        <div className="my-2 flex justify-between">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Write a reply"
            value={inputVal}
            onChange={inputField}
            className="rounded-sm w-2/3 h-10 text-black"
          />
          <button type="submit" className="bg-[#5561ea] h-10 rounded-sm w-24">
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
