export const pickOrder = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 1, 2, 3,
  7, 6, 2, 3, 1, 4, 5, 10, 11, 12, 9, 8, 1, 2, 9, 8, 12, 11, 10, 3, 4, 5, 7, 6,
].map((n) => n - 1);

const captains = [
  ["Maks", "PL"],
  ["Tom", "PL"],
  ["sae", "GB"],
  ["Xunito", "FI"],
  ["Thunder", "PL"],
  ["IRN", "PL"],
  ["TiMMi", "NO"],
  ["niw", "DK"],
  ["andeh", "SE"],
  ["TheChosenOne", "NO"],
  ["gamer", "FI"],
  ["Milton", "FI"],
];

const player_pool = [
  ["AHemlocksLie", "US"],
  ["Anza", "FI"],
  ["Dragon", "PL"],
  ["Ekz", "SE"],
  ["Flamer", "CZ"],
  ["Hammer", "PT"],
  ["HangTime", "GB"],
  ["Hooraytio", "SE"],
  ["Link", "NO"],
  ["MxCraven", "GB"],
  ["Nexus", "FI"],
  ["Ocoini", "NO"],
  ["Peppe", "SE"],
  ["PreMorteM", "NO"],
  ["Riki", "PL"],
  ["SS", "RU"],
  ["Slaughter", "PL"],
  ["Tumult", "SE"],
  ["alice", "SE"],
  ["anni", "DE"],
  ["badsebi", "PL"],
  ["bjarkeSTAR", "DK"],
  ["coj", "US"],
  ["cor (lord noob)", "PL"],
  ["dobeZz", "GB"],
  ["eh", "FI"],
  ["fix", "FI"],
  ["floc", "DE"],
  ["fluartity", "PL"],
  ["gLAd", "RU"],
  ["gore", "GB"],
  ["gosciu", "PL"],
  ["grc", "SE"],
  ["himmu", "FI"],
  ["jOn", "SE"],
  ["kane", "CZ"],
  ["kwon", "DE"],
  ["lurq", "SE"],
  ["mushi", "PT"],
  ["neophyte", "HU"],
  ["paniagua", "FI"],
  ["pixols", "GB"],
  ["plast", "PL"],
  ["rghst", "DE"],
  ["robin", "NO"],
  ["rokky", "SE"],
  ["rotker", "PL"],
  ["rusti", "FI"],
  ["s4vo", "PL"],
  ["samon", "PL"],
  ["sham", "PL"],
  ["tr0ll", "NO"],
  ["tuhmapoika", "FI"],
  ["viag", "CA"],
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
