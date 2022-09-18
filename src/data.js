/*
index team
6     Milton
5     bps
4     ParadokS
3     zero
2     razor
1     Diki
0     Gamer
*/

export const pickOrder = [
  // div 1 players
  0, 1, 2, 3, 4, 5, 6,
  0, 1, 2, 3, 4, 5, 6,
  6, 5, 4, 3, 2, 1, 0,
];

export const teams = {
  Milton: {
    id: "Milton",
    playerNames: ["Milton"],
    sortOrder: 7,
  },
  bps: {
    id: "bps",
    playerNames: ["bps"],
    sortOrder: 6,
  },
  ParadokS: {
    id: "ParadokS",
    playerNames: ["ParadokS"],
    sortOrder: 5,
  },
  zero: {
    id: "zero",
    playerNames: ["zero"],
    sortOrder: 4,
  },
  razor: {
    id: "razor",
    playerNames: ["razor"],
    sortOrder: 3,
  },
  Diki: {
    id: "Diki",
    playerNames: ["Diki"],
    sortOrder: 2,
  },
  Gamer: {
    id: "Gamer",
    playerNames: ["Gamer"],
    sortOrder: 1,
  },
};

const Player = (name, country_code) => ({ name, country_code });

export const players = {
  "AiRman": Player("AiRman", "pl"),
  "Andeh": Player("Andeh", "se"),
  "anni": Player("anni", "de"),
  "badsebi": Player("badsebi", "pl"),
  "Baresi": Player("Baresi", "no"),
  "bps": Player("bps", "se"),
  "BTK": Player("BTK", "ru"),
  "Calinou": Player("Calinou", "fr"),
  "coj": Player("coj", "us"),
  "cor": Player("cor", "pl"),
  "Creature": Player("Creature", "fi"),
  "dev": Player("dev", "es"),
  "devil": Player(".devil", "ru"),
  "dib": Player("dib", "pt"),
  "diehuman": Player("diehuman", "pt"),
  "Diki": Player("Diki", "fi"),
  "dobez": Player("dobez", "_scotland"),
  "driz": Player("driz", "us"),
  "Effie": Player("Effie", "no"),
  "eizor": Player("eizor", "de"),
  "eppe": Player("eppe", "se"),
  "FagFrager": Player("FagFrager", "pl"),
  "Final": Player("Final", "mt"),
  "fix": Player("fix", "fi"),
  "Flamer": Player("Flamer", "cz"),
  "floc": Player("floc", "de"),
  "Gamer": Player("Gamer", "fi"),
  "goblin": Player("goblin", "se"),
  "gor": Player("gor", "ru"),
  "Grc": Player("Grc", "se"),
  "HangTine": Player("HangTine", "gb"),
  "HaraldQuake": Player("HaraldQuake", "de"),
  "himmu": Player("himmu", "fi"),
  "Hooraytio": Player("Hooraytio", "se"),
  "kinoko": Player("kinoko", "ee"),
  "kip": Player("kip", "fi"),
  "Klice": Player("Klice", "fr"),
  "knasty": Player("knasty", "de"),
  "lethalwiz": Player("lethalwiz", "se"),
  "Link": Player("Link", "no"),
  "Lucky": Player("Lucky", "fi"),
  "Macler": Player("Macler", "pl"),
  "Medic": Player("Medic", "se"),
  "Milton": Player("Milton", "fi"),
  "MolkyPolky": Player("MolkyPolky", "ua"),
  "mushi": Player("mushi", "pt"),
  "ncr": Player("ncr", "se"),
  "Neopite": Player("Neopite", "hu"),
  "nexus": Player("nexus", "fi"),
  "Nico": Player("Nico", "us"),
  "Nidweyr": Player("Nidweyr", "de"),
  "Nigve": Player("Nigve", "no"),
  "Nilton": Player("Nilton", "cz"),
  "niw": Player("niw", "dk"),
  "oho": Player("oho", "fi"),
  "Ok98": Player("Ok98", "se"),
  "overflow": Player("overflow", "ch"),
  "paniagua": Player("paniagua", "fi"),
  "ParadokS": Player("ParadokS", "dk"),
  "pattah": Player("pattah", "de"),
  "ponczek": Player("ponczek", "pl"),
  "pooll": Player("pooll", "pl"),
  "PreMorteM": Player("PreMorteM", "no"),
  "raket": Player("raket", "se"),
  "razor": Player("razor", "se"),
  "rghst": Player("rghst", "de"),
  "Riki": Player("Riki", "pl"),
  "RIO": Player("RIO", "se"),
  "rotker": Player("rotker", "pl"),
  "rst": Player("rst", "se"),
  "rusti": Player("rusti", "fi"),
  "sae": Player("sae", "gb"),
  "samon": Player("samon", "pl"),
  "ShaZm": Player("ShaZm", "se"),
  "Shining": Player("Shining", "se"),
  "Si7H": Player("Si7H", "pl"),
  "skurk": Player("skurk", "se"),
  "Slaughter": Player("Slaughter", "fi"),
  "Sniegov": Player("Sniegov", "pl"),
  "splif": Player("splif", "ie"),
  "TheChosenOne": Player("TheChosenOne", "no"),
  "Thunder": Player("Thunder", "pl"),
  "TiMMi": Player("TiMMi", "no"),
  "Tom": Player("Tom", "pl"),
  "tr0ll": Player("tr0ll", "no"),
  "Viag": Player("Viag", "ca"),
  "Wim": Player("Wim", "nl"),
  "Zalon": Player("Zalon", "dk"),
  "zero": Player("zero", "hu"),
  "zigg": Player("zigg", "gb")
}
