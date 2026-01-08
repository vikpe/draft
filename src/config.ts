import { BoardConfig, Captain, Player } from "./components/board";

const captains: Captain[] = [
  {id: 1, name: "TheChosenOne", cc: "NO"},
  {id: 2, name: "carapace", cc: "SE"},
  {id: 3, name: "Creature", cc: "FI"},
  {id: 4, name: "BlooD_DoG", cc: "CA"},
  {id: 5, name: "lac", cc: "SE"},
  {id: 6, name: "bogojoker", cc: "US"},
  {id: 7, name: "Milton", cc: "FI"},
  {id: 8, name: "ParadokS", cc: "dk"},
  {id: 9, name: "zero", cc: "HU"},
  {id: 10, name: "Diki", cc: "FI"},
  {id: 11, name: "bps", cc: "SE"},
  {id: 12, name: "razor", cc: "SE"},
  {id: 13, name: "reppie", cc: "NL"},
  {id: 14, name: "stepcop", cc: "SE"},
  {id: 15, name: "mutilator", cc: "SE"},
  {id: 16, name: "XantoM", cc: "SE"},
];

const captainPickOrder = [
  1, 2, 3, 4, 5, 6, 7, // pick 1
  7, 6, 5, 4, 3, 2, 1, // pick 2
  1, 2, 3, 4, 5, 6, 7, // pick 3
];

const playerPool: Player = [
  { "name": "AHemlocksLie", "cc": "US" },
  { "name": "andeh", "cc": "SE" },
  { "name": "Baresi", "cc": "NO" },
  { "name": "Bernkaoch", "cc": "FR" },
  { "name": "Blaze", "cc": "US" },
  { "name": "coj", "cc": "US" },
  { "name": "cronus", "cc": "US" },
  { "name": "dobezz", "cc": "GB" },
  { "name": "driz", "cc": "AU" },
  { "name": "eh", "cc": "FI" },
  { "name": "gLAd", "cc": "RU" },
  { "name": "gnoffa", "cc": "SE" },
  { "name": "grc", "cc": "SE" },
  { "name": "grisling", "cc": "SE" },
  { "name": "HangTime", "cc": "GB" },
  { "name": "Hooraytio", "cc": "SE" },
  { "name": "Javve", "cc": "SE" },
  { "name": "j0rmund", "cc": "LV" },
  { "name": "kippo", "cc": "FI" },
  { "name": "Lethalwiz", "cc": "SE" },
  { "name": "Link", "cc": "NO" },
  { "name": "LocKtar", "cc": "SE" },
  { "name": "Macisum", "cc": "NO" },
  { "name": "macler", "cc": "PL" },
  { "name": "mazer", "cc": "SE" },
  { "name": "namtsui", "cc": "US" },
  { "name": "Nico", "cc": "US" },
  { "name": "Nidweyr", "cc": "UA" },
  { "name": "niw", "cc": "DK" },
  { "name": "oddjob", "cc": "SE" },
  { "name": "ok98", "cc": "SE" },
  { "name": "phrenic", "cc": "SE" },
  { "name": "pkk", "cc": "FI" },
  { "name": "PreMorteM", "cc": "NO" },
  { "name": "raket", "cc": "SE" },
  { "name": "rghst", "cc": "DE" },
  { "name": "rio", "cc": "SE" },
  { "name": "rusti", "cc": "FI" },
  { "name": "Slime", "cc": "SE" },
  { "name": "splash", "cc": "SE" },
  { "name": "TiMMi", "cc": "NO" },
  { "name": "tr0ll", "cc": "NO" },
  { "name": "Xerial", "cc": "SE" },
  { "name": "xero", "cc": "SE" },
  { "name": "yeti", "cc": "AU" },
  { "name": "Zalon", "cc": "DK" },
  { "name": "raz0", "cc": "DK" },
  { "name": "Zepp", "cc": "RU" }
]


export default {
  // data
  captains,
  playerPool,
  captainPickOrder,

  // interface
  teamColumns: 6,
  playerPoolColumns: 6,
} as BoardConfig;
