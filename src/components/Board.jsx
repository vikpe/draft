import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { deepCopy, playersInTeams, sortTeams } from "../util.js";
import { pickOrder, players, teams } from "../data.js";
import { move, reorderList, shouldReorderState } from "./dnd.js";
import Team from "./Team.jsx";

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

class Board extends React.Component {
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

    const pickLimit = Object.values(players).length;
    const draftStatus =
      pickedPlayerCount === pickLimit ? "completed" : "in-progress";

    let indexOfTeamToPick = -1;

    if (pickedPlayerCount < pickLimit) {
      indexOfTeamToPick = pickOrder[this.state.pickIndex % pickOrder.length];
    }

    const sortedTeams = Object.values(this.state.teams).sort(sortTeams);
    const teamCount = Object.values(this.state.teams).length - 1;

    let captainNumber;
    const captainPickLimit = teamCount * 5;

    if (pickedPlayerCount < captainPickLimit) {
      captainNumber = 1;
    } else {
      captainNumber = 2;
    }

    const pickRound = Math.floor(pickedPlayerCount / teamCount);
    const pickNumber = 1 + (pickedPlayerCount % teamCount);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={"app-controls"}>
          Round <span style={{ color: "cyan" }}>{pickRound}</span>, pick{" "}
          <span style={{ color: "cyan" }}>{pickNumber}</span>
          &nbsp;&nbsp;&nbsp;
          {this.stateHistory.length > 0 && (
            <span>
              &nbsp;&nbsp;&nbsp;
              <a href="#" onClick={this.handleUndoClick}>
                Undo last action
              </a>
            </span>
          )}
        </div>
        <div
          className={`app-draft app-draft-status-${draftStatus} app-captain-${captainNumber} app-teamcount-${teamCount}`}
        >
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

export default Board;
