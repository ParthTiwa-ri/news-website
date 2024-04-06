import React from "react";
import Discover from "../../discover/Discover";
import Side from "../../sideContent/side/Side";
import Life from "../comment/Life";
import Music from "../Sponsored/Sponsored";
import Popular from "../All_News/Popular";
import Ppost from "../NewsFeature/Ppost";
import "./style.css";

const Homes = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Ppost />
            <Life />
            <Music />
            <Popular />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Homes;
