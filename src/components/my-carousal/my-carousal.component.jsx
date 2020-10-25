import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <div id="home">
        <div className="player-wrapper">
          <ReactPlayer
            url="https://vinayakvijay02.github.io/react_portfolio/videos/demo_video.mp4"
            muted={true}
            Controls={true}
            loop={true}
            className="react-player"
            playing
            width="100%"
            height="80%"
          />
        </div>
      </div>
    );
  }
}

export default Video;
