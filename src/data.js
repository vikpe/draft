// NOTE: team keys, ids and player names are case sensitive

export const pickOrder = [
  // indexes, see below
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 1, 9, 10, 3, 8, 7, 6, 5, 4, 9, 10, 1, 2, 8,
  3, 4, 5, 6, 7,
].map((n) => n - 1);

export const teams = {
  Milton: {
    id: "Milton",
    playerNames: ["Milton"],
    index: 9,
  },
  Macler: {
    id: "Macler",
    playerNames: ["Macler"],
    index: 8,
  },
  raket: {
    id: "raket",
    playerNames: ["raket"],
    index: 7,
  },
  BTK: {
    id: "BTK",
    playerNames: ["BTK"],
    index: 6,
  },
  Gamer: {
    id: "Gamer",
    playerNames: ["Gamer"],
    index: 5,
  },
  PreMorteM: {
    id: "PreMorteM",
    playerNames: ["PreMorteM"],
    index: 4,
  },
  Rat: {
    id: "Rat",
    playerNames: ["Rat"],
    index: 3,
  },
  Shamoth: {
    id: "Shamoth",
    playerNames: ["Shamoth"],
    index: 2,
  },
  Floc: {
    id: "Floc",
    playerNames: ["Floc"],
    index: 1,
  },
  Daux: {
    id: "Daux",
    playerNames: ["Daux"],
    index: 0,
  },
};

const Player = (name, country_code) => ({ name, country_code });

export const players = {
  Daux: Player("Daux", "de"),
  Floc: Player("Floc", "de"),
  Shamoth: Player("Shamoth", "pl"),
  Rat: Player("Rat", "fi"),
  PreMorteM: Player("PreMorteM", "no"),
  Gamer: Player("Gamer", "fi"),
  BTK: Player("BTK", "ru"),
  raket: Player("raket", "se"),
  Macler: Player("Macler", "pl"),
  Milton: Player("Milton", "fi"),
  Tom: Player("Tom", "pl"),
  Diki: Player("Diki", "fi"),
  Thunder: Player("Thunder", "pl"),
  ShaZam: Player("ShaZam", "se"),
  sae: Player("sae", "gb"),
  IRN: Player("IRN", "pl"),
  gLAd: Player("gLAd", "ru"),
  Grc: Player("Grc", "se"),
  rusti: Player("rusti", "fi"),
  Plate: Player("Plate", "pl"),
  Quake: Player("Quake", "ru"),
  gore: Player("gore", "gb"),
  samon: Player("samon", "pl"),
  eh: Player("eh", "fi"),
  Slaughter: Player("Slaughter", "fi"),
  rghst: Player("rghst", "de"),
  sassa: Player("sassa", "se"),
  tuhmapoika: Player("tuhmapoika", "fi"),
  rokky: Player("rokky", "se"),
  Szturm: Player("Szturm", "pl"),
  Link: Player("Link", "no"),
  diabolic: Player("diabolic", "pt"),
  alice: Player("alice", "se"),
  Rotker: Player("Rotker", "pl"),
  robin: Player("robin", "no"),
  pixols: Player("pixols", "gb"),
  kwon: Player("kwon", "de"),
  crp: Player("crp", "se"),
  badsebi: Player("badsebi", "pl"),
  Bance: Player("Bance", "us"),
};
