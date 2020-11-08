function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "../web_modules/react.js";
import { Draggable } from "../web_modules/react-beautiful-dnd.js";

const getDraggableClassName = snapshot => {
  const classNames = ["app-player-draggable"];

  if (snapshot.isDragging) {
    classNames.push("app-dnd-drag");
  }

  return classNames.join(" ");
};

class Player extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "app-player"
    }, /*#__PURE__*/React.createElement(Draggable, {
      draggableId: this.props.player.name,
      index: this.props.index
    }, (provided, snapshot) => /*#__PURE__*/React.createElement("div", _extends({
      className: getDraggableClassName(snapshot),
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps), /*#__PURE__*/React.createElement("div", {
      className: "app-player-content"
    }, /*#__PURE__*/React.createElement("img", {
      src: `static/flags/32/${this.props.player.country_code.toUpperCase()}.png`,
      width: 32,
      className: "app-player-flag"
    }), " ", this.props.player.name))));
  }

}

export default Player;