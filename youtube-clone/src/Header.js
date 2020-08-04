import React from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <MenuSharpIcon />
            <img 
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="" />
            <input type="text"/>
            <SearchSharpIcon />
            <VideoCallSharpIcon />
            <AppsSharpIcon />
            <NotificationsSharpIcon />
            {/* <AccountCircleSharpIcon /> */}
            <Avatar 
                alt=""
                src=""
                />
        </div>
    )
}

export default Header