export type TeamMap = Map<string, Team>;
export type PlayerMap = Map<string, Player>;

export interface Team {
  id: string;
  players: Player[];
}

export interface Player {
  name: string;
  cc: string;
}

export interface Captain extends Player {
  id: number;
}

export interface BoardState {
  teams: Team[];
  currentPickIndex: number;
}

export interface BoardConfig {
  captains: Captain[];
  teamColumns: number;
  playerPool: Player[];
  playerPoolColumns: number;
  captainPickOrder: number[];
}
