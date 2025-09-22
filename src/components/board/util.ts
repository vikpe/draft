import type { DraggableLocation } from "react-beautiful-dnd";
import { chunk } from "remeda";
import type { BoardConfig, BoardState, Player, Team } from "./board.types";

export function deepCopy<T>(a: T): T {
  return JSON.parse(JSON.stringify(a));
}

export function createBoardState(config: BoardConfig): BoardState {
  // todo: validate pickOrder

  const { captains, playerPool, playerPoolColumns } = config;

  const teams: Team[] = captains.map((captain) => ({
    id: captain.id.toString(),
    players: [captain],
  }));

  const playersPerChunk = Math.ceil(playerPool.length / playerPoolColumns);

  teams.push(
    ...chunk(playerPool, playersPerChunk).map((players, index) => ({
      id: `playerpool-${index}`,
      players,
    })),
  );

  return {
    currentPickIndex: 0,
    teams,
  };
}

export function move(
  source: Player[],
  destination: Player[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
) {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  return {
    source: sourceClone,
    destination: destClone,
  };
}

export function reorderPlayers(
  players: Player[],
  startIndex: number,
  endIndex: number,
): Player[] {
  const result = Array.from(players);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}
