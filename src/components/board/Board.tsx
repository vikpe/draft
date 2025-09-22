import clsx from "clsx";
import JSConfetti from "js-confetti";
import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "react-beautiful-dnd";
import {
  createBoardState as createBoardStateFromConfig,
  deepCopy,
  move,
  reorderPlayers,
} from "@/components/board/util";
import type { BoardConfig, BoardState, Player } from "./board.types";
import "./board.css";

type BoardProps = {
  config: BoardConfig;
};

export class Board extends React.Component<BoardProps, BoardState> {
  config: BoardConfig;
  state: BoardState;
  pickOrder: number[];
  pickLimit: number;
  stateHistory: BoardState[];

  constructor(props: BoardProps) {
    super(props);

    const { config } = props;
    this.config = config;
    this.state = createBoardStateFromConfig(config);
    this.pickOrder = config.captainPickOrder.map((n) => n - 1); // change to indexes
    this.stateHistory = [];
    this.pickLimit =
      config.captains.length +
      Math.min(this.pickOrder.length, config.playerPool.length);
  }

  setAndSaveState = (newState: BoardState) => {
    this.setState(newState);
    // localStorage.setItem("draft", JSON.stringify(newState));
  };

  handleUndoClick = () => {
    const lastState = this.stateHistory.pop();

    if (lastState) {
      this.setAndSaveState(lastState);
    }
  };

  onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const isStateChanged = !(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    );
    if (!isStateChanged) {
      return;
    }

    this.stateHistory.push(deepCopy(this.state));

    if (source.droppableId === destination.droppableId) {
      const team = this.state.teams.find((t) => t.id === source.droppableId);

      if (!team) {
        return;
      }

      team.players = reorderPlayers(
        team.players,
        source.index,
        destination.index,
      );
    } else {
      const sourceTeam = this.state.teams.find(
        (t) => t.id === source.droppableId,
      );
      const destTeam = this.state.teams.find(
        (t) => t.id === destination.droppableId,
      );

      if (!sourceTeam || !destTeam) {
        return;
      }

      const moveResult = move(
        sourceTeam.players,
        destTeam.players,
        source,
        destination,
      );
      sourceTeam.players = moveResult.source;
      destTeam.players = moveResult.destination;

      this.state.currentPickIndex += 1;
    }

    this.setAndSaveState(this.state);
  };

  render() {
    const captainTeams = this.state.teams.filter(
      (t) => !t.id.includes("playerpool"),
    );
    const playerPoolTeams = this.state.teams.filter((t) =>
      t.id.includes("playerpool"),
    );

    const pickCount = captainTeams
      .map((t) => t.players.length)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const pickRound = Math.floor(pickCount / captainTeams.length);
    const pickNumber = 1 + (pickCount % captainTeams.length);

    const draftStatus =
      pickCount >= this.pickLimit ? "completed" : "in-progress";

    if (draftStatus === "completed") {
      new JSConfetti().addConfetti();
    }

    let indexOfTeamToPick = -1;

    if (pickCount < this.pickLimit) {
      indexOfTeamToPick =
        this.pickOrder[this.state.currentPickIndex % this.pickOrder.length];
    }

    const gridCols: Record<number, string> = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
    };

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={`dnd-status-${draftStatus}`}>
          <div className="dnd-controls text-white text-2xl mb-4">
            {draftStatus !== "completed" && (
              <>
                Round <span className="text-cyan-300">{pickRound}</span>, pick{" "}
                <span className="text-cyan-300">{pickNumber}</span>
              </>
            )}

            {this.stateHistory.length > 0 && (
              <span className="ml-4">
                <button
                  onClick={this.handleUndoClick}
                  className="text-fuchsia-600 hover:text-fuchsia-400 cursor-pointer"
                >
                  Undo last action
                </button>
              </span>
            )}
          </div>
          <div>
            <div id="dnd-teams" className={gridCols[this.config.teamColumns]}>
              {captainTeams.map((team, index) => (
                <DroppablePlayerList
                  key={team.id}
                  id={team.id}
                  players={team.players}
                  isActive={indexOfTeamToPick === index}
                />
              ))}
            </div>

            <div
              id="dnd-playerpool"
              className={gridCols[this.config.playerPoolColumns]}
            >
              {playerPoolTeams.map((team) => (
                <DroppablePlayerList
                  key={team.id}
                  id={team.id}
                  players={team.players}
                />
              ))}
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

function DroppablePlayerList({
  id,
  players,
  isActive = false,
}: {
  id: string;
  players: Player[];
  isActive?: boolean;
}) {
  return (
    <Droppable
      droppableId={id}
      isDropDisabled={!isActive}
      isCombineEnabled={isActive}
      ignoreContainerClipping
      direction="vertical"
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={clsx("dnd-droppable", {
            "dnd-isActive": isActive,
            "dnd-dragOver": snapshot.isDraggingOver,
          })}
        >
          {players.map((player, index) => (
            <DraggablePlayer key={player.name} index={index} player={player} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

function DraggablePlayer({ player, index }: { player: Player; index: number }) {
  return (
    <Draggable draggableId={player.name} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={clsx("dnd-draggable", {
            "dnd-isDragging": snapshot.isDragging,
          })}
        >
          <div className="dnd-player">
            <img
              src={`assets/img/flags/32/${player.cc.toLowerCase()}.png`}
              width={32}
              height={32}
              alt={player.cc}
            />
            <span>{player.name}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
}
