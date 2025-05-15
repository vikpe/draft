export const pickOrder = [
  1, 2, 3, 4, 5, 6, 7, 5, 6, 7, 4, 3, 2, 1, 2, 1, 3, 4, 7, 6, 5, 1, 5, 6, 7, 4,
].map((n) => n - 1);

const captains = [
  ["spokz", "PL"],
  ["Link", "NO"],
  ["Nexus", "FI"],
  ["Nico", "US"],
  ["tuhmapoika", "FI"],
  ["myca", "PL"],
  ["neophyte", "HU"],
];

const player_pool = [
  ["AHemlocksLie", "US"],
  ["alice", "SE"],
  ["badsebi", "PL"],
  ["biggz", "IS"],
  ["Calinou", "FR"],
  ["diehuman", "PT"],
  ["Dobezz", "GB"],
  ["doomie", "PL"],
  ["duce", "DE"],
  ["Evil", "UA"],
  ["Flash", "CA"],
  ["HaraldQuake", "DE"],
  ["kwon", "DE"],
  ["milamber", "HU"],
  ["musi", "HU"],
  ["NinJaA", "HU"],
  ["nlk", "RU"],
  ["Pamppu", "FI"],
  ["PhenomenA", "SE"],
  ["RaggA", "IE"],
  ["ratatat", "SE"],
  ["rotker", "PL"],
  ["sailorman", "SE"],
  ["Veggie", "US"],
  ["XuMuK", "RU"],
  ["ztranger", "PT"],
];

// do not edit below
export const teams = captains.reduce((teams, [name, _], index) => {
  teams[name] = {
    id: name,
    index,
    playerNames: [name],
  };
  return teams;
}, {});

export const players = [...player_pool, ...captains]
  .toSorted((a, b) => a[0].localeCompare(b[0]))
  .reduce((players, [name, country_code]) => {
    players[name] = { name, country_code: country_code.toLocaleLowerCase() };
    return players;
  }, {});
