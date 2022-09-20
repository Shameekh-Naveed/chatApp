import React, { useState } from "react";

const Searchbar = () => {
  const [searchResult, setSearchResult] = useState([]);

  const [form, setForm] = useState({
    query: "",
  });
  const scrollBarStyle = {
    // Hiding the scroll bar
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* Internet Explorer 10+ */,
  };

  const findUser = async (body) => {
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
        setSearchResult({ name: response.name, email: response.email });
      } else {
        alert(response.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formSubmit = (e) => {
    e.preventDefault();
    findUser(form);
    setForm({ query: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  return (
    <div
      className="col-span-5 flex flex-col text-white px-9 py-3 h-full overflow-y-auto"
      style={scrollBarStyle}
    >
      <div className="section mt-2 mb-4">
        <h2 className="text-2xl font-semibold">Search for Users</h2>
      </div>
      <div className="section my-3">
        <form action="" method="post" onSubmit={formSubmit}>
          <input
            className="block h-8 p-2 w-56 bg-gray-200 focus:outline-2 focus:outline-blue-300 text-black"
            type="text"
            name="query"
            id="query"
            onChange={handleChange}
            placeholder="Shameekh Naveed"
            value={form.query}
          />

          <button
            className="block my-3 h-8 p-2 w-auto bg-gray-200 focus:border-2 focus:border-blue-300 text-black"
            type="submit"
          >
            {/* {login ? "Login" : "Signup"} */}FIND
          </button>
        </form>
        <div className="section my-3">
            <p>{searchResult.name}</p>
            <p>{searchResult.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
