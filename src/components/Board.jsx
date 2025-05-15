import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { deepCopy, sortTeams } from "../util.js";
import { pickOrder, players, teams } from "../data.js";
import { move, reorderList, shouldReorderState } from "../dnd.js";

import _chunk from "lodash.chunk";
import { DroppablePlayerList } from "./Player.jsx";
// confetti
import JSConfetti from "js-confetti";

// add player pools
function appendPlayerPoolTeams() {
  const playersInTeams = Object.values(teams)
    .map((t) => t.playerNames)
    .reduce(
      (all, playersInCurrentTeam) => all.concat(playersInCurrentTeam),
      [],
    );
  const playerPoolPlayerNames = Object.keys(players).filter(
    (p) => !playersInTeams.includes(p),
  );

  _chunk(playerPoolPlayerNames, 7).map((playerNames, index) => {
    const id = `playerpool-${index}`;
    teams[id] = { id, playerNames };
  });
}

appendPlayerPoolTeams();

const jsConfetti = new JSConfetti();
let hasUsedConfetti = false;

// data
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

    if (!shouldReorderState(destination, source)) {
      return;
    }

    this.stateHistory.push(deepCopy(this.state));

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
    const playersByNames = (names) =>
      names.map((name) => this.state.players[name]);

    const sortedTeams = Object.values(this.state.teams).sort(sortTeams);
    const captainTeams = sortedTeams.filter(
      (t) => !t.id.includes("playerpool"),
    );
    const playerPoolTeams = sortedTeams.filter((t) =>
      t.id.includes("playerpool"),
    );

    const pickCount = captainTeams
      .map((t) => t.playerNames.length)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const pickRound = Math.floor(pickCount / captainTeams.length);
    const pickNumber = 1 + (pickCount % captainTeams.length);

    const pickLimit = pickOrder.length + captainTeams.length;
    const draftStatus = pickCount >= pickLimit ? "completed" : "in-progress";

    if (!hasUsedConfetti && "completed" === draftStatus) {
      jsConfetti.addConfetti();
      hasUsedConfetti = true;
    }

    let indexOfTeamToPick = -1;

    if (pickCount < pickLimit) {
      indexOfTeamToPick = pickOrder[this.state.pickIndex % pickOrder.length];
    }

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={`app-draft app-draft-status-${draftStatus}`}>
          <div className="app-controls text-white text-2xl mb-4">
            Round <span className="text-cyan-300">{pickRound}</span>, pick{" "}
            <span className="text-cyan-300">{pickNumber}</span>
            {this.stateHistory.length > 0 && (
              <span className="ml-4">
                <a
                  href="#"
                  onClick={this.handleUndoClick}
                  className="text-fuchsia-600 hover:text-fuchsia-400"
                >
                  Undo last action
                </a>
              </span>
            )}
          </div>
          <div>
            <div id="app-teams" className={`grid gap-4 grid-cols-4 mb-4`}>
              {captainTeams.map((team, index) => (
                <DroppablePlayerList
                  key={team.id}
                  id={team.id}
                  players={playersByNames(team.playerNames)}
                  highlight={indexOfTeamToPick === index}
                />
              ))}
            </div>

            <div
              id="app-playerpool"
              className="p-4 bg-black/80 rounded-xl grid grid-cols-4 border border-sky-500"
            >
              {playerPoolTeams.map((team) => (
                <DroppablePlayerList
                  key={team.id}
                  id={team.id}
                  players={playersByNames(team.playerNames)}
                />
              ))}
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default Board;
