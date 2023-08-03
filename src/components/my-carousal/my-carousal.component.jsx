import React, { Component } from "react";
import ReactPlayer from "react-player";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div>
      <div id={id}>
        <div className="player-wrapper" id={id}>
          <ReactPlayer
            url="https://vinayakvijay02.github.io/react_portfolio/videos/demo_video.mp4"
            muted={true}
            Controls={true}
            loop={true}
            className="react-player"
            playing
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
