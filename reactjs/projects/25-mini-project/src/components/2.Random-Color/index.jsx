import React, { useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // let a = Math.floor(Math.random() * 1000000);
    // console.log(Math.floor(Math.random() * 1000000));
    // setColor(`#${a}`);

    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]; //--> Here hex.length is 15 it give index and apply in hex[]
    }

    setColor(hexColor);

    console.log(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    console.log(
      randomColorUtility(256),
      randomColorUtility(256),
      randomColorUtility(256)
    );
    setColor(`rgb(${r},${g},${b})`);
  }

  function hexColorGenrator(){
    setTypeOfColor("hex")
    handleCreateRandomHexColor()
  }

  function rgbColorGenrator(){
    setTypeOfColor("rgb")
    handleCreateRandomRgbColor()
  }

  return (
    <div className="fixstyle"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <h1>Project No. 2</h1>
      <div className="mainContainer">
        {/* <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button> */}
        <button onClick={hexColorGenrator}>Create Hex Random Color</button>
        <button onClick={rgbColorGenrator}>Create RGB Random Color</button>
        {/* <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button> */}
      </div>

      <div
        className="textContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h3>
        <h2>{color}</h2> 
      </div>
    </div>
  );
}
