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
  alice: Player("alice", "se"),
  badsebi: Player("badsebi", "pl"),
  Bance: Player("Bance", "us"),
  BTK: Player("BTK", "ru"),
  crp: Player("crp", "se"),
  Daux: Player("Daux", "de"),
  diabolic: Player("diabolic", "pt"),
  Diki: Player("Diki", "fi"),
  eh: Player("eh", "fi"),
  Floc: Player("Floc", "de"),
  Gamer: Player("Gamer", "fi"),
  gLAd: Player("gLAd", "ru"),
  gore: Player("gore", "gb"),
  Grc: Player("Grc", "se"),
  IRN: Player("IRN", "pl"),
  kwon: Player("kwon", "de"),
  Link: Player("Link", "no"),
  Macler: Player("Macler", "pl"),
  Milton: Player("Milton", "fi"),
  pixols: Player("pixols", "gb"),
  Plate: Player("Plate", "pl"),
  PreMorteM: Player("PreMorteM", "no"),
  Quake: Player("Quake", "ru"),
  raket: Player("raket", "se"),
  Rat: Player("Rat", "fi"),
  rghst: Player("rghst", "de"),
  robin: Player("robin", "no"),
  rokky: Player("rokky", "se"),
  Rotker: Player("Rotker", "pl"),
  rusti: Player("rusti", "fi"),
  sae: Player("sae", "gb"),
  samon: Player("samon", "pl"),
  sassa: Player("sassa", "se"),
  Shamoth: Player("Shamoth", "pl"),
  ShaZam: Player("ShaZam", "se"),
  Slaughter: Player("Slaughter", "fi"),
  Szturm: Player("Szturm", "pl"),
  Thunder: Player("Thunder", "pl"),
  Tom: Player("Tom", "pl"),
  tuhmapoika: Player("tuhmapoika", "fi"),
};
