import React from "react";
import Typewriter from "typewriter-effect";
import "./title-message.css";

const TitleMessage = () => (
  <div className="titleMessage">
    <div className="heading">
      <div className="main text-center mb-3">
        Hi, I am
        <br />
        <span>
          <strong>Vinayak Nadar</strong>
        </span>
      </div>
      <div className="sub">
        <Typewriter
          options={{
            strings: ["Programmer... ", "Gamer...", "Learner..."],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </div>
    </div>
  </div>
);

export default TitleMessage;
