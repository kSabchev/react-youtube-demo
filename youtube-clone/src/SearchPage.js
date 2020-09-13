import React from "react";
import "./SearchPage.css";
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
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CIzJ-foF&rs=AOn4CLB2mY6K4yNs0v0iNRmAXuey4T7TiQ"
        channel="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        verified
        subs="123K"
        noOfVideos={123}
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training ..."
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
  );
}

export default SearchPage;
