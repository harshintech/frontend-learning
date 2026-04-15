import React from "react";
import Accordian from "./components/1.Accordian";
import RandomColor from "./components/2.Random-Color";
import StarRating from "./components/3.Star-Rating";
import ImageSlider from "./components/4.Image-slider";
import LoadMoreData from "./components/5.Load-More-Data";
import TreeView from "./components/6.Tree-View";
import menus from "./components/6.Tree-View/data";
import QRCodeGenerator from "./components/7.QR-Code-Generator";
import LightDarkMode from "./components/8.Light-Dark-Mode";
import ScrollIndicator from "./components/9.Scroll-Indicator";
import TabTest from "./components/10.CustomTabs/tab-test";
import ModalTest from "./components/11.Custom-Modal-Popup/modal-test";
import GithubProfileFinder from "./components/12.Github-Profile-Finder";
import SearchAutoComplete from "./components/13.Search-Auto-Complete-With-Api";
import TicTacToe from "./components/14.tic-tac-toe";
import PasswordGenerator from "./components/15.PasswordGenerator/PasswordGenerator";
import Intro from "./components/0.Intro/Intro";


const App = () => {
  return (
    <div className="Main-Box">
      <Intro />
      <Accordian />
      <RandomColor />
      <StarRating noOfStar={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={2} limit={10} />
      <LoadMoreData />
      <TreeView menus={menus} />
      <QRCodeGenerator />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <TabTest />
      <ModalTest />
      <GithubProfileFinder />
      <SearchAutoComplete />
      <TicTacToe />
      <PasswordGenerator />
    </div>
  );
};

export default App;
