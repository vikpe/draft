import { BoardConfig, Captain, Player } from "./components/board";

const captains: Captain[] = [
  {id: 1, name: "spokz", cc: "PL"},
  {id: 2, name: "Link", cc: "NO"},
  {id: 3, name: "Nexus", cc: "FI"},
  {id: 4, name: "Nico", cc: "US"},
  {id: 5, name: "tuhmapoika", cc: "FI"},
  {id: 6, name: "myca", cc: "PL"},
  {id: 7, name: "neophyte", cc: "HU"},
];

const captainPickOrder = [
  1, 2, 3, 4, 5, 6, 7, // pick 1
  7, 6, 5, 4, 3, 2, 1, // pick 2
  1, 2, 3, 4, 5, 6, 7, // pick 3
];

const playerPool: Player[] = [
  {name: "AHemlocksLie", cc: "US"},
  {name: "alice", cc: "SE"},
  {name: "badsebi", cc: "PL"},
  {name: "biggz", cc: "IS"},
  {name: "Calinou", cc: "FR"},
  {name: "diehuman", cc: "PT"},
  {name: "Dobezz", cc: "GB"},
  {name: "doomie", cc: "PL"},
  {name: "duce", cc: "DE"},
  {name: "Evil", cc: "UA"},
  {name: "Flash", cc: "CA"},
  {name: "HaraldQuake", cc: "DE"},
  {name: "kwon", cc: "DE"},
  {name: "milamber", cc: "HU"},
  {name: "musi", cc: "HU"},
  {name: "NinJaA", cc: "HU"},
  {name: "nlk", cc: "RU"},
  {name: "Pamppu", cc: "FI"},
  {name: "PhenomenA", cc: "SE"},
  {name: "RaggA", cc: "IE"},
  {name: "ratatat", cc: "SE"},
  {name: "rotker", cc: "PL"},
  {name: "sailorman", cc: "SE"},
  {name: "Veggie", cc: "US"},
  {name: "XuMuK", cc: "RU"},
  {name: "ztranger", cc: "PT"},
];

export default {
  // data
  captains,
  playerPool,
  captainPickOrder,

  // interface
  teamColumns: 4,
  playerPoolColumns: 5,
} as BoardConfig;
