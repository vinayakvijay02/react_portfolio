import React, { Component } from "react";

const imgMyimageexample = require("../assets/img/background/background.webp");
const divStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${imgMyimageexample})`,
};

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" style={divStyle} id={id}>
        <h1 align="center">Some header example</h1>
      </div>
    </div>
  );
}
