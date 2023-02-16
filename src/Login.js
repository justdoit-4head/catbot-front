import React, { useState, useEffect } from "react";
import Register from "./Register";
import "./Sidebar.css";
import ccp from "./cpp.jpeg";

const BASEUPI = "https://cat-front.onrender.com";

function Login({ user, setUser, setLegit, setForm }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // auth handler function

  // calling auth when app starts
  // useEffect(() => {
  //   doauth();
  // }, []);

  const sendcreds = async (e) => {
    e.preventDefault();
    const data = await fetch(BASEUPI + "/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        alert("ERROR" + err);
      });

    // setting user for my fron end >>>> down below

    setUser([data]);
    setUsername("");
    setPassword("");
    // doauth();
    // setLegit(false);
    setForm("register");
  };

  const loadregister = () => {
    setForm("register");
  };

  return (
    <div className="login-container">
      <h1>WELcome to my reGister page AYAYA</h1>
      <form>
        <input
          type="name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="what can we call you"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button onClick={sendcreds} type="submit" style={{ cursor: "pointer" }}>
          {" "}
          sell creds to ccp{" "}
        </button>
      </form>
      <img src={ccp} alt="ccp" className="lul" />
      <p>password is not encrypted (still learinig how to do that)</p>
      <button onClick={loadregister} style={{ cursor: "pointer" }}>
        click me to direct to login page
      </button>
    </div>
  );
}

export default Login;
