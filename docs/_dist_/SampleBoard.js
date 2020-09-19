function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "../web_modules/react.js";
import { DragDropContext } from "../web_modules/react-beautiful-dnd.js";
import Team from "./Team.js";
import { teams, players } from "./data.js";
teams.playerPool = {
  id: "playerPool",
  name: "Player Pool",
  playerNames: []
};
teams.playerPool.playerNames = Object.keys(players);
const defaultData = {
  teams,
  players,
  pickIndex: 0
};

const getInitialData = () => {
  const localData = localStorage.getItem("draft");

  if (localData) {
    return JSON.parse(localData);
  } else {
    return defaultData;
  }
};

const shouldReorderState = (destination, source) => {
  return !(!destination || destination.droppableId === source.droppableId && destination.index === source.index);
};

const reorderList = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);
  return {
    source: sourceClone,
    destination: destClone
  };
};

class SampleBoard extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", getInitialData());

    _defineProperty(this, "onDragEnd", result => {
      const {
        destination,
        source
      } = result;

      if (!shouldReorderState(destination, source)) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        const team = this.state.teams[source.droppableId];
        team.playerNames = reorderList(team.playerNames, source.index, destination.index);
      } else {
        const sourceTeam = this.state.teams[source.droppableId];
        const destTeam = this.state.teams[destination.droppableId];
        const moveResult = move(sourceTeam.playerNames, destTeam.playerNames, source, destination);
        sourceTeam.playerNames = moveResult.source;
        destTeam.playerNames = moveResult.destination;
        this.state.pickIndex += 1;
      }

      this.setState(this.state);
      localStorage.setItem("draft", JSON.stringify(this.state));
    });
  }

  render() {
    const playersByTeam = team => team.playerNames.map(playerId => this.state.players[playerId]);

    const teamToPickIndex = this.state.pickIndex % (Object.values(this.state.teams).length - 1);
    return /*#__PURE__*/React.createElement(DragDropContext, {
      onDragEnd: this.onDragEnd
    }, /*#__PURE__*/React.createElement("div", {
      className: "app-teams-container"
    }, Object.values(this.state.teams).map((team, index) => /*#__PURE__*/React.createElement(Team, {
      key: team.id,
      team: team,
      players: playersByTeam(team),
      highlight: teamToPickIndex === index
    }))), /*#__PURE__*/React.createElement("div", null, this.state.pickIndex), /*#__PURE__*/React.createElement("div", null, teamToPickIndex));
  }

}

export default SampleBoard;