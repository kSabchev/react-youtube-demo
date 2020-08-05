import React from 'react'
import SidebarRow from './SidebarRow.js';
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';

function Sidebar() {
    return (
        <div className="sidebar">
           
           <SidebarRow selected='true' Icon={HomeIcon} title="Home"/> 
           <SidebarRow Icon={WhatshotIcon} title="Trending"/>
           <SidebarRow Icon={SubscriptionIcon} title="Subscriptions"/>
           <hr />
            

        </div>
    )
}

export default Sidebar
