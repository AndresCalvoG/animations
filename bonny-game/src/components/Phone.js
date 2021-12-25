import React from "react";
import "./styles/phone.css";

import Layer from "./Layer";
import Bunny from "./Bunny";
import Wall from "./Wall";
import Lawn from "./Lawn";
import RightCloud from "./RightCloud";
import LeftCloud from "./LeftCloud";

function Phone() {
  return (
    <div className="phone">
      <Layer clase="layer-1">
        <input type="checkbox" />
        <Bunny />
      </Layer>
      <Layer clase="layer-2">
        <input type="checkbox" />
        <Bunny />
      </Layer>
      <Layer clase="layer-3">
        <Wall />
      </Layer>
      <Layer clase="layer-4">
        <input type="checkbox" />
        <Bunny />
      </Layer>
      <Layer clase="layer-5">
        <Wall />
      </Layer>
      <Layer clase="layer-6">
        <input type="checkbox" />
        <Bunny />
      </Layer>
      <Layer clase="layer-7">
        <Wall />
      </Layer>
      <Layer clase="layer-8">
        <Lawn />
      </Layer>
      <Layer clase="layer-9">
        <LeftCloud />
      </Layer>
      <Layer clase="layer-10">
        <RightCloud />
      </Layer>
      <h1 class="title">
        <img
          src="https://i.ibb.co/J3Kn71r/cbd152ddb203fe23ad78261749534e7d.png"
          alt="Animationland"
        />
      </h1>
      <h2 class="score">Score:</h2>
    </div>
  );
}

export default Phone;
