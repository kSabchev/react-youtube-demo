import React from "react";
import { Avatar } from "@material-ui/core/Avatar";
import "./ChannelRow.css";

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return <div className="channelRow">

      <Avatar className="channelRow__logo"
      alt={channel} src={image} />
      <div className="channelRow__text">
          <h4>
              {channel}
          </h4>
          <p>

          </p>
      </div>
  </div>;
}

export default ChannelRow;
