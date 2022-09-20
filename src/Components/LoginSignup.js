import React, { useState } from "react";

const LoginSignup = (props) => {
  const host = "http://localhost:5050";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(true);

  //   Function that uses fetch API to login or signup
  const authentication = async (body,command) => {
    const url = `${host}/auth/${command}`;
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const response = await res.json();
    if (response.status) {
      localStorage.setItem("auth_tokken", response.auth_tokken);
      //   Uplift state
      props.statusChange();
    } else {
      alert(response.msg);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (login) {
        authentication(form,'login')
    } else {
        authentication(form,'signup')
    }
    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  return (
    <div className="w-screen h-screen bg-[#25262b] flex items-center justify-center">
      <div className="bg-white rounded-sm h-3/5 w-2/6 flex items-center justify-center flex-col border-t-4 border-blue-500">
        <form action="" method="post" onSubmit={formSubmit}>
          {!login && (
            <input
              className="block m-5 h-12 p-2 w-96 bg-gray-200 focus:outline-2 focus:outline-blue-300"
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Shameekh Naveed"
              value={form.name}
            />
          )}
          <input
            className="block m-5 h-12 p-2 w-96 bg-gray-200 focus:outline-2 focus:outline-blue-300"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="shameekh@mail.com"
            value={form.email}
          />
          <input
            className="block m-5 h-12 p-2 w-96 bg-gray-200 focus:outline-2 focus:outline-blue-300"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="*********"
            value={form.password}
          />
          <button
            className="block mx-auto h-12 p-2 w-auto bg-gray-200 focus:border-2 focus:border-blue-300"
            type="submit"
          >
            {login ? "Login" : "Signup"}
          </button>
        </form>
        <p className="my-4">
          {login ? "Dont have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setLogin(!login)}>
            {login ? "Signup" : "Login"}
          </button>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
