import React from "react";

import { DragDropContext } from "react-beautiful-dnd";

import { deepCopy } from "./util";

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

const playersInTeams = Object.values(teams)
  .map((t) => t.playerNames)
  .reduce((all, playersInCurrentTeam) => all.concat(playersInCurrentTeam), []);

teams.playerPool = {
  id: "playerPool",
  name: "Player Pool",
  playerNames: Object.keys(players).filter((p) => !playersInTeams.includes(p)),
};

const getDefaultData = () => deepCopy({ teams, players, pickIndex: 0 });

const getInitialData = () => {
  return getDefaultData();
  const localData = localStorage.getItem("draft");

  if (localData) {
    return JSON.parse(localData);
  } else {
    return getDefaultData();
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
  stateHistory = [];

  setAndSaveState = (newState) => {
    this.setState(newState);
    localStorage.setItem("draft", JSON.stringify(newState));
  };

  handleUndoClick = () => {
    const lastState = this.stateHistory.pop();
    this.setAndSaveState(lastState);
  };

  onDragEnd = (result) => {
    const { destination, source } = result;

    this.stateHistory.push(deepCopy(this.state));

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

    this.setAndSaveState(this.state);
  };

  render() {
    const playersByTeam = (team) =>
      team.playerNames.map((playerId) => this.state.players[playerId]);

    const pickedPlayerCount =
      Object.values(this.state.teams)
        .map((t) => t.playerNames.length)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) -
      this.state.teams["playerPool"].playerNames.length;

    const numberOfTeams = Object.values(this.state.teams).length - 1;
    const pickLimit = numberOfTeams * (8 + 1);
    const draftStatus =
      pickedPlayerCount === pickLimit ? "completed" : "in-progress";

    let indexOfTeamToPick = -1;

    if (pickedPlayerCount < pickLimit) {
      indexOfTeamToPick = pickOrder[this.state.pickIndex % pickOrder.length];
    }

    const sortedTeams = Object.values(this.state.teams).sort(sortTeams);

    const pickRound = 1 + Math.floor(this.state.pickIndex / numberOfTeams);
    const pickNumber = 1 + (this.state.pickIndex % numberOfTeams);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={"app-controls"}>
          Round <span style={{ color: "cyan" }}>{pickRound}</span>, pick{" "}
          <span style={{ color: "cyan" }}>{pickNumber}</span>
          {this.stateHistory.length > 0 && (
            <span>
              &nbsp;&nbsp;&nbsp;
              <a href="#" onClick={this.handleUndoClick}>
                Undo last action
              </a>
            </span>
          )}
        </div>
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
