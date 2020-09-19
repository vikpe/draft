import React from "../web_modules/react.js";
import logo from "./logo.svg.proxy.js";
import "./App.css.proxy.js";
import SampleBoard from "./SampleBoard.js";

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    width: 32
  }), " GetQuad Draft"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SampleBoard, null)));
}

export default App;