import React from 'react'
import "./Sidebar.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2> FILTER </h2>
            </div>
            <hr />

            <ChannelRow
            image=""
            channel="tomato potato"
            verified
            subs="123K"
            noOfVideos={123}
            description="123"
            />
        </div>
    )
}

export default SearchPage