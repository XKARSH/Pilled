import React from "react";
import Navbar from "./components/Navbar";
import Images from "./components/Images";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";
import Component7 from "./components/Component7";

export default function App() {
  return (
    <div
      style={{
        margin: 0,
        width: "100%",
        height: "fit-content",
        backgroundColor: "#E1DDDD",
      }}
    >
      <div style={{ backgroundColor: "#1B1B1B" }}>
        <Navbar />
        <Images />
        <Component2 />
      </div>
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}
