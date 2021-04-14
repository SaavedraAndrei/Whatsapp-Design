import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />

      <div className="sidebarChat__info">
        <h2>Clever Programmer Room</h2>
        <p>Good Morning</p>
      </div>
    </div>
  );
}

export default SidebarChat;
