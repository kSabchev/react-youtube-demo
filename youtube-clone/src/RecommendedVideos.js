import React from 'react'
import "./RecommendedVideos.css";
import "./VideoCard";
import VideoCard from './VideoCard';
import "./VideoCard.css";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2></h2>
            <div className="recommendedVideos__videos" >
                <VideoCard 
                title=""
                views="2.3M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image="https://i.ytimg.com/vi/93cXY2QTx5M/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCiC58nrVvVIsRFwTOCNd2bpGmG5g"/>

                
                <VideoCard                 
                title=""
                views="2.3M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image="https://i.ytimg.com/vi/5zvWfI2iF64/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBBgw7sxScAgNi4iSHyMopcV6aMbQ"/>

                

                <VideoCard 
                  title=""
                  views="1.0M"
                  timestamp="3 days ago"
                  channelImage=""
                  channel="name"
                  image=""  
                />
                <VideoCard
                title=""
                views="1.0M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image=""  
                 />
                <VideoCard 
                title=""
                views="1.0M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image=""  />
                <VideoCard
                title=""
                views="1.0M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image=""   />
                <VideoCard
                title=""
                views="1.0M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image=""   />
                <VideoCard
                title=""
                views="1.0M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image=""   />
                <VideoCard 
                title=""
                views="1.0M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image=""  />
                <VideoCard
                title=""
                views="1.0M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image=""   />
                <VideoCard
                title=""
                views="1.0M"
                timestamp="3 days ago"
                channelImage=""
                channel="name"
                image=""   />
            </div>

        </div>
    )
}

export default RecommendedVideos
