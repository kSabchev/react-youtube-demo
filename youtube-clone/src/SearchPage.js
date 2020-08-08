import React from 'react'
import "./Sidebar.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2> FILTER </h2>
            </div>
            <hr />

            <ChannelRow
            image="https://i.ytimg.com/vi/rJjaqSTzOxI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLBunAWTjl8qA5eq9qL5rmx1KwNkOA"
            channel="tomato potato"
            verified
            subs="123K"
            noOfVideos={123}
            description="123"
            />
            <hr />

            <VideoRow 
             views="1.4M"
             subs="123K"
             description="This is a long description"
             timestamp="59 seconds ago"
             channel="KaloyanSabchev"
             title="Test title"
             image="https://i.ytimg.com/vi/rJjaqSTzOxI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLBunAWTjl8qA5eq9qL5rmx1KwNkOA"
             />
        </div>
    )
}

export default SearchPage