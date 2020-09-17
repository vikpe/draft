import React from "react";

import { DragDropContext } from "react-beautiful-dnd";

import Team from "./Team";

const teams = {
  PlayerPool: {
    name: "PlayerPool",
    playerNames: [],
  },
};

const players = {
  XantoM: { name: "XantoM", country_code: "se" },
  bps: { name: "bps", country_code: "se" },
  Milton: { name: "Milton", country_code: "fi" },
  henu: { name: "henu", country_code: "fi" },
  mm: { name: "mm", country_code: "se" },
  HangTime: { name: "HangTime", country_code: "uk" },
  lordlame: { name: "lordlame", country_code: "ie" },
  ok98: { name: "ok98", country_code: "se" },
  ParadokS: { name: "ParadokS", country_code: "dk" },
  Shaka: { name: "Shaka", country_code: "se" },
};

teams.PlayerPool.playerNames = Object.keys(players);

const defaultData = { teams, players };

const getInitialData = () => {
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

class SampleBoard extends React.Component {
  state = getInitialData();

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!shouldReorderState(destination, source)) {
      return;
    }

    const team = this.state.teams[source.droppableId];
    const newPlayerNames = Array.from(team.playerNames);
    newPlayerNames.splice(source.index, 1);
    newPlayerNames.splice(destination.index, 0, draggableId);

    const newTeam = {
      ...team,
      playerNames: newPlayerNames,
    };

    const newState = {
      ...this.state,
      teams: {
        ...this.state.teams,
        [newTeam.name]: newTeam,
      },
    };

    this.setState(newState);
    localStorage.setItem("draft", JSON.stringify(newState));
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {Object.values(this.state.teams).map((team) => {
          const players = team.playerNames.map(
            (playerId) => this.state.players[playerId],
          );

          return <Team key={team.name} team={team} players={players} />;
        })}
      </DragDropContext>
    );
  }
}

export default SampleBoard;
