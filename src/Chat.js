import React, { useEffect, useState } from "react";
import "./App.css";
import { Avatar } from "@mui/material";
import { IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import Sidebar from "./Sidebar";
import emo from "./PagMan.png";

const BASEUPI = "https://cat-front.onrender.com";

function Chat({ user, setLegit }) {
  const [msgs, setMsgs] = useState([]);
  const [popupActive, setPopupActive] = useState(false);

  //   useEffect(() => {
  //     renderMessages();
  //   }, []);

  useEffect(() => {
    renderMessages();
  }, [msgs]);

  const renderMessages = () => {
    fetch(BASEUPI + "/messages")
      .then((res) => res.json())
      .then((data) => {
        setMsgs(data);
      })

      .catch((err) => console.error("error: ", err));
  };

  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const data = fetch(BASEUPI + "/messages/addnew", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: input,
        user: user.username,
      }),
    }).then((res) => res.json());

    setMsgs([...msgs, data]);
    setInput("");
  };

  const jackoff = (message) => {
    console.log(message._id);
  };

  const chooseit = (msg) => {
    if (msg.user === user.username) {
      return `-sending`;
    } else {
      return ``;
    }
  };

  return (
    <>
      <Sidebar user={user} setLegit={setLegit} />
      <div className="chat">
        <div className="chat__header">
          <Avatar src={emo} />

          <div className="chat__headerInfo">
            <h3>Crippling anxiety</h3>
            <p>Last seen at...</p>
          </div>

          <div className="chat__headerRight">
            <IconButton style={{ color: "gray" }}>
              <SearchOutlined style={{ color: "gray" }} />
            </IconButton>
            <IconButton style={{ color: "gray" }}>
              <AttachFile style={{ color: "gray" }} />
            </IconButton>
            <IconButton style={{ color: "gray" }}>
              <MoreVert style={{ color: "gray" }} />
            </IconButton>
          </div>
        </div>

        <div className="chat__body">
          <div className="fieldOfText">
            {msgs.length > 0 ? (
              msgs.map((msg) => (
                <div
                  // className="messagediv"
                  className={`messageBlue` + chooseit(msg)}
                  // {if(msg.user == user[0].username){.div} else{()}}

                  key={msg._id}
                  onDoubleClick={() => setPopupActive(false)}
                >
                  <div className="ussrname">{msg.user}</div>
                  <div className="text">{msg.text}</div>
                  <div className="messageTimeStampRight">{msg.timestamp}</div>
                  {popupActive ? (
                    <div className="popup" key={msg._id}>
                      <div
                        className="closePopup"
                        onClick={() => setPopupActive(false)}
                      >
                        X
                      </div>
                      <div
                        className="delete"
                        onClick={(msg) => {
                          jackoff(msg);
                        }}
                      >
                        delete
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                </div>
              ))
            ) : (
              <h2>you aint got shit fam</h2>
            )}
          </div>
        </div>

        <div className="chat__footer">
          <InsertEmoticonIcon style={{ color: "gray" }} />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              type="text"
            />
            <button onClick={sendMessage} type="submit">
              Send a message
            </button>
          </form>
          <MicIcon style={{ color: "gray" }} />
        </div>
      </div>
    </>
  );
}

export default Chat;
