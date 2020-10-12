import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoStateless from "./compunents/DemoStateless";
import DemoStateful from "./compunents/DemoStateful";
import BTLayout1 from "./compunents/BTLayoutComponent/BTLayout1";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoConditionalAndState from "./Demo login/DemoConditionalAndState";
import BTChonMauXe from "./BTChonMauXe";
import DemoListAndKeys from "./ListAndKeys/DemoListAndKeys";
import DemoProps from "./Props 2/DemoProps";
import BTapGioHang from "./compunents/BTGioHang";

function App() {
  return (
    <div className="App">
      {/*<DemoStateless />
      <DemoStateful />*/}
      {/* <BTLayout1 /> */}
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      {/* <DemoConditionalAndState /> */}
      {/* <BTChonMauXe />
      <DemoListAndKeys /> */}
      {/* <DemoProps /> */}
      <BTapGioHang />
    </div>
  );
}

export default App;
