// NOTE: team keys, ids and player names are case sensitive

export const pickOrder = [
  // indexes, see below
  0, 1, 2, 3, 4, 5, 6,
  0, 1, 2, 3, 4, 5, 6,
  6, 5, 4, 3, 2, 1, 0,
  6, 5, 4, 3, 2, 1, 0,
];

export const teams = {
  ncr: {
    id: "ncr",
    playerNames: ["ncr"],
    index: 6,
  },
  tr0ll: {
    id: "tr0ll",
    playerNames: ["tr0ll"],
    index: 5,
  },
  Link: {
    id: "Link",
    playerNames: ["Link"],
    index: 4,
  },
  Nico: {
    id: "Nico",
    playerNames: ["Nico"],
    index: 3,
  },
  floc: {
    id: "floc",
    playerNames: ["floc"],
    index: 2,
  },
  nexus: {
    id: "nexus",
    playerNames: ["nexus"],
    index: 1,
  },
  Zalon: {
    id: "Zalon",
    playerNames: ["Zalon"],
    index: 0,
  },
};

const Player = (name, country_code) => ({ name, country_code });

export const players = {
  "alice": Player("alice", "se"),
  "anni": Player("anni", "de"),
  "badsebi": Player("badsebi", "pl"),
  "Bass": Player("Bass", "no"),
  "Calinou": Player("Calinou", "fr"),
  "devil": Player(".devil", "ru"),
  "diehuman": Player("diehuman", "pt"),
  "dobez": Player("dobez", "_scotland"),
  "driz": Player("driz", "us"),
  "eizor": Player("eizor", "de"),
  "eppe": Player("eppe", "se"),
  "floc": Player("floc", "de"),
  "HaraldQuake": Player("HaraldQuake", "de"),
  "himmu": Player("himmu", "fi"),
  "Karnage": Player("Karnage", "us"),
  "kinoko": Player("kinoko", "ee"),
  "Klice": Player("Klice", "fr"),
  "knasty": Player("knasty", "de"),
  "Link": Player("Link", "no"),
  "MolkyPolky": Player("MolkyPolky", "ua"),
  "ncr": Player("ncr", "se"),
  "Neopite": Player("Neopite", "hu"),
  "nexus": Player("nexus", "fi"),
  "Nico": Player("Nico", "us"),
  "Nilton": Player("Nilton", "cz"),
  "oho": Player("oho", "fi"),
  "pattah": Player("pattah", "de"),
  "Pitbull": Player("Pitbull", "lt"),
  "pixols": Player("pixols", "gb"),
  "rotker": Player("rotker", "pl"),
  "Shining": Player("Shining", "se"),
  "Si7H": Player("Si7H", "pl"),
  "tr0ll": Player("tr0ll", "no"),
  "Viag": Player("Viag", "ca"),
  "Zalon": Player("Zalon", "dk"),
}
