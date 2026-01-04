import { BoardConfig, Captain, Player } from "./components/board";

const captains: Captain[] = [
  {id: 1, name: "Captain 1", cc: "SE"},
  {id: 2, name: "Captain 2", cc: "SE"},
  {id: 3, name: "Captain 3", cc: "SE"},
  {id: 4, name: "Captain 4", cc: "SE"},
  {id: 5, name: "Captain 5", cc: "SE"},
  {id: 6, name: "Captain 6", cc: "SE"},
  {id: 7, name: "Captain 7", cc: "SE"},
  {id: 8, name: "Captain 8", cc: "SE"},
  {id: 9, name: "Captain 9", cc: "SE"},
  {id: 10, name: "Captain 10", cc: "SE"},
  {id: 11, name: "Captain 11", cc: "SE"},
  {id: 12, name: "Captain 12", cc: "SE"},
  {id: 13, name: "Captain 13", cc: "SE"},
  {id: 14, name: "Captain 14", cc: "SE"},
  {id: 15, name: "Captain 15", cc: "SE"},
  {id: 16, name: "Captain 16", cc: "SE"},
];

const captainPickOrder = [
  1, 2, 3, 4, 5, 6, 7, // pick 1
  7, 6, 5, 4, 3, 2, 1, // pick 2
  1, 2, 3, 4, 5, 6, 7, // pick 3
];

const playerPool: Player[] = Array.from({ length: 48 }, (_, i) => i + 1).map(n => ({name: `Player ${n}`, cc: "SE"}));
  // {name: "AHemlocksLie", cc: "US"},

export default {
  // data
  captains,
  playerPool,
  captainPickOrder,

  // interface
  teamColumns: 6,
  playerPoolColumns: 6,
} as BoardConfig;
