import React from "react";
import "./RecommendedVideos.css";
import "./VideoCard";
import VideoCard from "./VideoCard";
import "./VideoCard.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      {/* <h2></h2> */}
      <div className="recommendedVideos__videos">
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="92 709"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Clever Programmer"
          image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CIzJ-foF&rs=AOn4CLB2mY6K4yNs0v0iNRmAXuey4T7TiQ"
        />

        <VideoCard
          title="klipche za wow"
          views="2.3M"
          timestamp="3 days ago"
          channelImage=""
          channel="Azmongold"
          image="https://i.ytimg.com/vi/93cXY2QTx5M/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCiC58nrVvVIsRFwTOCNd2bpGmG5g"
        />

        <VideoCard
          title="MGK"
          views="2.3M"
          timestamp="3 days ago"
          channelImage=""
          channel="Machine Gun Kelly"
          image="https://i.ytimg.com/vi/5zvWfI2iF64/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBBgw7sxScAgNi4iSHyMopcV6aMbQ"
        />

        <VideoCard
          title="Christopher Tin - Baba Yetu (Official Music Video)"
          views="20 171 794"
          timestamp="30.10.2009"
          channelImage="https://yt3.ggpht.com/a/AATXAJw34wZ0HalexbrDkj7IODxrMtAeG-eTZc9hLQ0oAQ=s48-c-k-c0xffffffff-no-nd-rj"
          channel="Christopher Tin"
          image="https://i.ytimg.com/vi/IJiHDmyhE1A/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAXa7OiUGMU05l17tuRnQ5DnWRgAA"
        />
        <VideoCard
          title="2CELLOS - Thunderstruck [OFFICIAL VIDEO]"
          views="183 587 389"
          timestamp="19.02.2014"
          channelImage="https://i.ytimg.com/vi/uT3SBzmDxGk/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBI9TjwUGdat10QJqPF_qp2H9ZSiw"
          channel="2CELLOS"
          image="https://i.ytimg.com/an_webp/uT3SBzmDxGk/mqdefault_6s.webp?du=3000&sqp=CNzU-foF&rs=AOn4CLCOI-Gmq0JGaFkc1KxF4-UU6fqy_w"
        />
        <VideoCard
          title="BASSHUNTER - DOTA"
          views="29 812 057"
          timestamp="4.05.2012"
          channelImage="https://yt3.ggpht.com/a/AATXAJzvG0geobhOZTqUiSlLE_9j3PFxX1JxhBwOsFHQ=s48-c-k-c0xffffffff-no-rj-mo"
          channel="BromaSixteen"
          image="https://i.ytimg.com/vi/12vh55_1ul8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAPf9ofBy_EGoUy3weA9J4hDpyehA" 
        />
        <VideoCard
          title="deadmau5 - Raise Your Weapon"
          views="70 325 408"
          timestamp="29.11.2010"
          channelImage="https://yt3.ggpht.com/a/AATXAJx9L5q5OYOHxRkEmH_qq55UHKbM1sQB1qwIiU7H0Q=s48-c-k-c0xffffffff-no-rj-mo"
          channel="Ultra music"
          image="https://i.ytimg.com/vi/YnwfTHpnGLY/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCyAR4mR7i6MZej3WQbZoXF3Ps15Q"
        />
        <VideoCard
          title="Cinema - Skrillex"
          views="52 499 236q"
          timestamp="9.08.2011"
          channelImage="https://yt3.ggpht.com/a/AATXAJwqxED3cenT4KI2qOfb2QSiFVXbfXvNnuonAlAu=s48-c-k-c0xffffffff-no-rj-mo"
          channel="TJammyify"
          image="https://i.ytimg.com/vi/QQcQDbpDH_o/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCpHP9oQOqhBvM1oD7SMtVU4YB_LA"
        />
        <VideoCard
          title="Tiësto, Oliver Heldens - The Right Song (official video) ft. Natalie La Rose"
          views="43 521 950"
          timestamp="22.01.2016"
          channelImage="https://yt3.ggpht.com/a/AATXAJw4xLPG9GTlpB2SOjiCn9dwdl0mYiR2YN5lPSG-fQ=s48-c-k-c0xffffffff-no-nd-rj"
          channel="Tiësto"
          image="https://i.ytimg.com/vi/JxEiIeoet6Q/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDXvnlBlkswfevyzNrf-NUl_s2_ig"
        />
        <VideoCard
          title="Foo Fighters - The Pretender"
          views="434 902 607"
          timestamp="3.10.2009"
          channelImage="https://yt3.ggpht.com/a/AATXAJwl12ADlbGkfRzKZkWdOnRQJ_Xi9YYT_TOPViR9qQ=s48-c-k-c0xffffffff-no-nd-rj"
          channel="Foo Fighters"
          image="https://i.ytimg.com/vi/SBjQ9tuuTJQ/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLC1oXLRjWS5a-c2wcMD5OSI_PjFRQ"
        />
        <VideoCard
          title="Eminem - Godzilla ft. Juice WRLD"
          views="241.0M"
          timestamp="6 months ago"
          channelImage=""
          channel="Eminem"
          image="https://i.ytimg.com/an_webp/r_0JjYUe5jo/mqdefault_6s.webp?du=3000&sqp=COTo-foF&rs=AOn4CLDOqrwbStVChYLV9hEtCx1HLBl6rQ"
        />
        <VideoCard
          title="Eminem - Godzilla ft. Juice WRLD"
          views="241.0M"
          timestamp="6 months ago"
          channelImage=""
          channel="Eminem"
          image="https://i.ytimg.com/an_webp/r_0JjYUe5jo/mqdefault_6s.webp?du=3000&sqp=COTo-foF&rs=AOn4CLDOqrwbStVChYLV9hEtCx1HLBl6rQ"
        />
        <VideoCard
          title="Eminem - Godzilla ft. Juice WRLD"
          views="241.0M"
          timestamp="6 months ago"
          channelImage=""
          channel="Eminem"
          image="https://i.ytimg.com/an_webp/r_0JjYUe5jo/mqdefault_6s.webp?du=3000&sqp=COTo-foF&rs=AOn4CLDOqrwbStVChYLV9hEtCx1HLBl6rQ"
        />
        <VideoCard
          title="Eminem - Godzilla ft. Juice WRLD"
          views="241.0M"
          timestamp="6 months ago"
          channelImage=""
          channel="Eminem"
          image="https://i.ytimg.com/an_webp/r_0JjYUe5jo/mqdefault_6s.webp?du=3000&sqp=COTo-foF&rs=AOn4CLDOqrwbStVChYLV9hEtCx1HLBl6rQ"
        />
        <VideoCard
          title="Eminem - Godzilla ft. Juice WRLD"
          views="241.0M"
          timestamp="6 months ago"
          channelImage=""
          channel="Eminem"
          image="https://i.ytimg.com/an_webp/r_0JjYUe5jo/mqdefault_6s.webp?du=3000&sqp=COTo-foF&rs=AOn4CLDOqrwbStVChYLV9hEtCx1HLBl6rQ"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
