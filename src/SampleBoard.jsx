import React from "react";

import { DragDropContext } from "react-beautiful-dnd";

import Team from "./Team";

const teams = {
  red: {
    id: "red",
    name: "Team Red",
    playerNames: [],
  },
  blue: {
    id: "blue",
    name: "Team Blue",
    playerNames: [],
  },
  orange: {
    id: "orange",
    name: "Team Orange",
    playerNames: [],
  },
  yellow: {
    id: "yellow",
    name: "Team Yellow",
    playerNames: [],
  },
  playerPool: {
    id: "playerPool",
    name: "Player Pool",
    playerNames: [],
  },
};

const players = {
  XantoM: { name: "XantoM", country_code: "se" },
  bps: { name: "bps", country_code: "se" },
  Milton: { name: "Milton", country_code: "fi" },
  henu: { name: "henu", country_code: "fi" },
  mm: { name: "mm", country_code: "se" },
  HangTime: { name: "HangTime", country_code: "gb" },
  lordlame: { name: "lordlame", country_code: "ie" },
  ok98: { name: "ok98", country_code: "se" },
  ParadokS: { name: "ParadokS", country_code: "dk" },
  Shaka: { name: "Shaka", country_code: "se" },
};

teams.playerPool.playerNames = Object.keys(players);

const defaultData = { teams, players };

const getInitialData = () => {
  return defaultData;
  const localData = localStorage.getItem("draft");

  if (localData) {
    return JSON.parse(localData);
  } else {
    return defaultData;
  }
};

const shouldReorderState = (destination, source) => {
  return !(
    !destination ||
    (destination.droppableId === source.droppableId &&
      destination.index === source.index)
  );
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
    destination: destClone,
  };
};

class SampleBoard extends React.Component {
  state = getInitialData();

  onDragEnd = (result) => {
    const { destination, source } = result;

    if (!shouldReorderState(destination, source)) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const team = this.state.teams[source.droppableId];
      team.playerNames = reorderList(
        team.playerNames,
        source.index,
        destination.index,
      );
    } else {
      const sourceTeam = this.state.teams[source.droppableId];
      const destTeam = this.state.teams[destination.droppableId];

      const moveResult = move(
        sourceTeam.playerNames,
        destTeam.playerNames,
        source,
        destination,
      );
      sourceTeam.playerNames = moveResult.source;
      destTeam.playerNames = moveResult.destination;
    }

    this.setState(this.state);
    // localStorage.setItem("draft", JSON.stringify(this.state));
  };

  render() {
    const playersByTeam = (team) =>
      team.playerNames.map((playerId) => this.state.players[playerId]);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="app-teams-container">
          {Object.values(this.state.teams).map((team) => (
            <Team key={team.id} team={team} players={playersByTeam(team)} />
          ))}
        </div>
      </DragDropContext>
    );
  }
}

export default SampleBoard;
