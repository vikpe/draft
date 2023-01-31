// NOTE: team keys, ids and player names are case sensitive

export const pickOrder = [
  // indexes, see below
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  4, 3, 2, 1, 0, 5, 6, 7, 8, 9, 10, 11,
  3, 2, 1, 0, 4, 5, 6, 11, 10, 9, 8, 7,
];

export const teams = {
  Alice: {
    id: "Alice",
    playerNames: ["Alice"],
    index: 0,
  },
  Neophyte: {
    id: "Neophyte",
    playerNames: ["Neophyte"],
    index: 1,
  },
  Nexus: {
    id: "Nexus",
    playerNames: ["Nexus"],
    index: 2,
  },
  FinalExit: {
    id: "FinalExit",
    playerNames: ["FinalExit"],
    index: 3,
  },
  Dib: {
    id: "Dib",
    playerNames: ["Dib"],
    index: 4,
  },
  rusti: {
    id: "rusti",
    playerNames: ["rusti"],
    index: 5,
  },
  K4t: {
    id: "K4t",
    playerNames: ["K4t"],
    index: 6,
  },
  Grc: {
    id: "Grc",
    playerNames: ["Grc"],
    index: 7,
  },
  Sae: {
    id: "Sae",
    playerNames: ["Sae"],
    index: 8,
  },
  IRN: {
    id: "IRN",
    playerNames: ["IRN"],
    index: 9,
  },
  gor: {
    id: "gor",
    playerNames: ["gor"],
    index: 10,
  },
  Macler: {
    id: "Macler",
    playerNames: ["Macler"],
    index: 11,
  },
};

const Player = (name, country_code) => ({ name, country_code });

export const players = {
  "Alice": Player("Alice", "se"),
  "Neophyte": Player("Neophyte", "se"),
  "Nexus": Player("Nexus", "se"),
  "FinalExit": Player("FinalExit", "se"),
  "Dib": Player("Dib", "se"),
  "rusti": Player("rusti", "se"),
  "K4t": Player("K4t", "se"),
  "Grc": Player("Grc", "se"),
  "Sae": Player("Sae", "se"),
  "IRN": Player("IRN", "se"),
  "gor": Player("gor", "se"),
  "Macler": Player("Macler", "se"),

  "Milton": Player("Milton", "fi"),
  "Gamer": Player("Gamer", "fi"),
  "Creature": Player("Creature", "fi"),
  "Goniec": Player("Goniec", "pl"),
  "HangTime": Player("HangTime", "gb"),
  "Tom": Player("Tom", "pl"),
  "Diki": Player("Diki", "fi"),
  "TheChosenOne": Player("TheChosenOne", "no"),
  "Thunder": Player("Thunder", "pl"),
  "overflow": Player("overflow", "br"),
  "andeh": Player("andeh", "se"),
  "TiMMi": Player("TiMMi", "no"),
  "BTK": Player("BTK", "ru"),
  "kip": Player("kip", "fi"),
  "samon": Player("samon", "pl"),
  "paniagua": Player("paniagua", "fi"),
  "Shamoth": Player("Shamoth", "pl"),
  "rghst": Player("rghst", "de"),
  "mushi": Player("mushi", "pt"),
  "zigg": Player("zigg", "gb"),
  "coj": Player("coj", "us"),
  "Hooraytio": Player("Hooraytio", "se"),
  "Zyziek": Player("Zyziek", "pl"),
  "fgh": Player("fgh", "se"),
  "Link": Player("Link", "no"),
  "Pattah": Player("Pattah", "de"),
  "andy": Player("andy", "de"),
  "ocoini": Player("ocoini", "no"),
  "himmu": Player("himmu", "fi"),
  "Nautilus": Player("Nautilus", "gb"),
  "robin": Player("robin", "no"),
  "Doomie": Player("Doomie", "pl"),
  "tuhmapoika": Player("tuhmapoika", "fi"),
  "eppe": Player("eppe", "se"),
  "crippan": Player("crippan", "se"),
  "HaraldQuake": Player("HaraldQuake", "de"),
}
