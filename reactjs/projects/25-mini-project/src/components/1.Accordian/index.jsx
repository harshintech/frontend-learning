import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    console.log(multiple);
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper fixstyle">
      <h1 style={{width:"250px",backgroundColor:"rgb(178, 55, 250)", padding:"10px 20px"}}>Project No. 1</h1>
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        style={{
          backgroundColor: enableMultiSelection ? "white" : "black",
          color: enableMultiSelection ? "black" : "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div className="answerbox">
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content2 ">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content2 ">{dataItem.answer}</div>
                    )}
                {/* {selected == dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              </div>
            </div>
          ))
        ) : (
          <div>No data found ! </div>
        )}
      </div>
    </div>
  );
}
