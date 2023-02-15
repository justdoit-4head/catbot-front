import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import { IconButton } from "@material-ui/core";
import forsen from "./ForsenLookingAtYous.png";
import okayeg from "./fingerr.jfif";
import feelsdankman from "./HYPERS.png";

function Sidebar({ user, setLegit }) {
  const logout = () => {
    setLegit(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="header-container">
          <div className="avatar">
            <Avatar src={feelsdankman} />
          </div>
          <div className="other3">
            <IconButton style={{ color: "gray" }}>
              <DonutLargeIcon style={{ color: "gray" }} />
            </IconButton>
            <IconButton style={{ color: "gray" }}>
              <ChatIcon style={{ color: "gray" }} />
            </IconButton>
            <IconButton style={{ color: "gray" }}>
              <MoreVertIcon style={{ color: "gray" }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="searchbar"></div>
      <div className="chatlist">
        <div className="fngr">
          <img src={okayeg} alt="forseen" className="finger" />
          <div className="name">kid named- {user.username}</div>
          <img src={okayeg} alt="forseen" className="finger" />
        </div>
      </div>

      <img src={forsen} alt="forseen" className="H" onClick={logout} />
      <p className="para">Logout?</p>
    </div>
  );
}

export default Sidebar;
