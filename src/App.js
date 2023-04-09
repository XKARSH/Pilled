import React from "react";
import Navbar from "./components/Navbar";
import TitlePage from "./components/TitlePage";
import GetStarted from "./components/GetStarted";
import Logos from "./components/Logos";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import Qualities from "./components/Qualities";
import ContactUs from "./components/ContactUs";

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
        <TitlePage />
        <GetStarted />
      </div>
      <Logos />
      <Benefits />
      <Products />
      <Qualities />
      <ContactUs />
    </div>
  );
}
