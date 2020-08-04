import React from "react";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchSharpIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon"/>
        <AppsSharpIcon className="header__icon"/>
        <NotificationsSharpIcon className="header__icon"/>
        <Avatar alt="" src="" />
      </div>
    </div>
  );
}

export default Header;
