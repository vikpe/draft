import React from "../web_modules/react.js";
import {Draggable} from "../web_modules/react-beautiful-dnd.js";
const getDraggableClassName = (snapshot) => {
  const classNames = ["app-player-draggable"];
  if (snapshot.isDragging) {
    classNames.push("app-dnd-drag");
  }
  return classNames.join(" ");
};
class Player extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "app-player"
    }, /* @__PURE__ */ React.createElement(Draggable, {
      draggableId: this.props.player.name,
      index: this.props.index
    }, (provided, snapshot) => /* @__PURE__ */ React.createElement("div", {
      className: getDraggableClassName(snapshot),
      ref: provided.innerRef,
      ...provided.draggableProps,
      ...provided.dragHandleProps
    }, /* @__PURE__ */ React.createElement("div", {
      className: "app-player-content"
    }, /* @__PURE__ */ React.createElement("img", {
      src: `static/flags/32/${this.props.player.country_code.toUpperCase()}.png`,
      width: 32,
      className: "app-player-flag"
    }), " ", this.props.player.name))));
  }
}
export default Player;
