import React from "react";

import { DragDropContext } from "react-beautiful-dnd";

import Team from "./Team";

import { pickOrder, players, teams } from "./data";

const sortTeams = (a, b) => {
  if (a.sortOrder < b.sortOrder) {
    return -1;
  } else if (a.sortOrder > b.sortOrder) {
    return 1;
  } else {
    return 0;
  }
};

teams.playerPool = {
  id: "playerPool",
  name: "Player Pool",
  playerNames: [],
};
teams.playerPool.playerNames = Object.keys(players);

const defaultData = { teams, players, pickIndex: 0 };

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

      this.state.pickIndex += 1;
    }

    this.setState(this.state);
    localStorage.setItem("draft", JSON.stringify(this.state));
  };

  render() {
    const playersByTeam = (team) =>
      team.playerNames.map((playerId) => this.state.players[playerId]);
    const indexOfTeamToPick =
      pickOrder[this.state.pickIndex % pickOrder.length] - 1;

    const pickedPlayerCount =
      Object.values(this.state.teams)
        .map((t) => t.playerNames.length)
        .reduce((accumulator, currentValue) => accumulator + currentValue) -
      this.state.teams["playerPool"].playerNames.length;

    const numberOfTeams = Object.values(this.state.teams).length - 1;
    const pickLimit = numberOfTeams * (1);
    const draftStatus =
      pickedPlayerCount < pickLimit ? "in-progress" : "completed";
    const sortedTeams = Object.values(this.state.teams).sort(sortTeams);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={`app-draft app-draft-status-${draftStatus}`}>
          <div className="app-teams-container">
            {sortedTeams.map((team, teamIndex) => (
              <Team
                key={team.id}
                team={team}
                players={playersByTeam(team)}
                highlight={indexOfTeamToPick === teamIndex}
              />
            ))}
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default SampleBoard;
