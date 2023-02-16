import { useState, useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Login from "./Login";
import Register from "./Register";

const BASEUPI = "https://catbot-backend.onrender.com";

// const [legit, setLegit] = useState();

function App() {
  const [user, setUser] = useState();
  const [legit, setLegit] = useState(false);
  const [currentform, setForm] = useState("login");

  // const doauth = async () => {
  //   const data = await fetch(BASEUPI + "/auth", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: "jj",
  //       password: "aa",
  //     }),
  //   }).then((res) => res.json());

  //   setLegit(data);
  // };
  // console.log(legit);
  return (
    <div className="app">
      <div className="app__body">
        {
          legit ? (
            <Chat user={user} setLegit={setLegit} />
          ) : currentform === "login" ? (
            <Login
              user={user}
              setUser={setUser}
              setLegit={setLegit}
              setForm={setForm}
            />
          ) : (
            <Register setLegit={setLegit} setForm={setForm} setUser={setUser} />
          )
          //
        }
      </div>
    </div>
  );
}

export default App;
