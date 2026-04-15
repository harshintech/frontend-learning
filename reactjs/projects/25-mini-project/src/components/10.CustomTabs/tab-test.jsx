import React from "react";
import Tabs from "./tabs";
import "./tabs.css";

export default function TabTest() {
  function ProjectContent() {
    return <h1>Project No.10</h1>;
  }
  function RandomComponents() {
    return <h1>Some Random Content</h1>;
  }

  const tabs = [
    { label: "Tab 1", content: <ProjectContent /> },
    { label: "Tab 2", content: <div>This is content for tab 2</div> },
    { label: "Tab 3", content: <RandomComponents /> },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
