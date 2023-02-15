import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import ccp from "./cpp.jpeg";

const BASEUPI = "https://catbot-backend.onrender.com";

function Register({ setLegit, setForm, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loadlogin = () => {
    setForm("login");
  };

  const doauth = async (e) => {
    e.preventDefault();
    const data = await fetch(BASEUPI + "/auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => res.json());

    const setshit = () => {
      setLegit(true);
      setUser(data);
    };

    // data
    //   ? //   ? setshit() //setting legit true and setting user for login // making a function dawg
    //     console.log(data)
    //   : console.log("cant login, register first or learn how to type");
    // setLegit(false);
    console.log(data);
    data ? setshit() : console.log("retard");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h1>WELcome LOgin page</h1>
      <form>
        <input
          type="name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button onClick={doauth} type="submit" style={{ cursor: "pointer" }}>
          {" "}
          sell creds to ccp{" "}
        </button>
      </form>
      <img src={ccp} alt="ccp" className="lul" />
      <button
        onClick={loadlogin}
        username={username}
        password={password}
        style={{ cursor: "pointer" }}
      >
        click me to register yourself
      </button>
    </div>
  );
}

export default Register;
