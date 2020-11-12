function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "../web_modules/react.js";
import Player from "./Player.js";
import { Droppable } from "../web_modules/react-beautiful-dnd.js";

const getDroppableClassNames = snapshot => {
  const classNames = ["app-team-droppable"];

  if (snapshot.isDraggingOver) {
    classNames.push("app-dnd-dragover");
  }

  return classNames.join(" ");
};

const getClassNames = props => {
  const classNames = ["app-team", `app-team-id-${props.team.id}`];

  if (props.highlight) {
    classNames.push("app-team-highlight");
  }

  if (props.team.hasOwnProperty("theme")) {
    classNames.push(`app-team-theme app-team-theme-${props.team.theme}`);
  }

  return classNames.join(" ");
};

class Team extends React.Component {
  render() {
    const isPlayerPool = this.props.team.id === "playerPool";
    const direction = isPlayerPool ? "horizontal" : "vertical";
    return /*#__PURE__*/React.createElement("div", {
      className: getClassNames(this.props)
    }, /*#__PURE__*/React.createElement("div", {
      className: "app-team-title"
    }, this.props.team.name), /*#__PURE__*/React.createElement(Droppable, {
      droppableId: this.props.team.id,
      direction: direction
    }, (provided, snapshot) => /*#__PURE__*/React.createElement("div", _extends({
      className: getDroppableClassNames(snapshot),
      ref: provided.innerRef
    }, provided.droppableProps), this.props.players.map((player, index) => /*#__PURE__*/React.createElement(Player, {
      key: player.name,
      player: player,
      index: index
    })), provided.placeholder)));
  }

}

export default Team;