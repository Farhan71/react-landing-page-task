import React from "react";
import "./Other.css";

const Slogan = () => {
  return (
    <div className="our-motto-wrapper" >
      <p className="primary-subheading">Our Motto</p>
      <div className="ourMotto">
        Make
        <div id="flip">
          <div>
            <div>Food</div>
          </div>
          <div>
            <div>LifeStyle</div>
          </div>
          <div>
            <div>EveryThing</div>
          </div>
        </div>
        AweSoMe!
      </div>
    </div>
  );
};

export default Slogan;
