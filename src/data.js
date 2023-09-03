// NOTE: team keys, ids and player names are case sensitive

export const pickOrder = [
    // indexes, see below
    0, 1, 2, 3, 4, 5, 6, 7, 
    4, 5, 6, 7, 3, 2, 1, 0,
    3, 2, 1, 0, 7, 6, 5, 4,
    0, 1, 2, 3, 4, 5, 6, 7,
    7, 6, 5, 4, 3, 2, 1, 0
];

export const teams = {
    Milton: {
        id: "Milton",
        playerNames: ["Milton"],
        index: 7,
    },
    creature: {
        id: "creature",
        playerNames: ["creature"],
        index: 6,
    },
    nigve: {
        id: "nigve",
        playerNames: ["nigve"],
        index: 5,
    },
    IronmaneN: {
        id: "IronmaneN",
        playerNames: ["IronmaneN"],
        index: 4,
    },
    Tom: {
        id: "Tom",
        playerNames: ["Tom"],
        index: 3,
    },
    ok98: {
        id: "ok98",
        playerNames: ["ok98"],
        index: 2,
    },
    Riki: {
        id: "Riki",
        playerNames: ["Riki"],
        index: 1,
    },
    paniagua: {
        id: "paniagua",
        playerNames: ["paniagua"],
        index: 0,
    }
};

const Player = (name, country_code) => ({name, country_code});

export const players = {
    alice: Player("alice", "se"),
    andyblub: Player("andyblub", "de"),
    Annihilator: Player("Annihilator", "de"),
    badsebi: Player("badsebi", "pl"),
    coj: Player("coj", "us"),
    creature: Player("creature", "fi"),
    Crp: Player("Crp", "se"),
    d2: Player("d2 (lolek)", "pl"),
    dobeZz: Player("dobeZz", "_scotland"),
    ekz: Player("ekz", "se"),
    eppe: Player("eppe", "se"),
    fgh: Player("fgh", "se"),
    FinalExit: Player("FinalExit", "se"),
    Flamer: Player("Flamer", "cz"),
    floc: Player("floc", "de"),
    gore: Player("gore", "gb"),
    gosciu: Player("gosciu", "pl"),
    HaraldQuake: Player("HaraldQuake", "de"),
    himmu: Player("himmu", "fi"),
    Hooraytio: Player("Hooraytio", "se"),
    IronmaneN: Player("IronmaneN", "pl"),
    kwon: Player("kwon", "de"),
    Link: Player("Link", "no"),
    Milton: Player("Milton", "fi"),
    Nautilus: Player("Nautilus", "gb"),
    nigve: Player("nigve", "no"),
    ocoini: Player("ocoini", "no"),
    ok98: Player("ok98", "se"),
    paniagua: Player("paniagua", "fi"),
    samon: Player("samon", "pl"),
    rghst: Player("rghst", "de"),
    Riki: Player("Riki", "pl"),
    rob: Player("rob", "no"),
    rusti: Player("rusti", "fi"),
    sickness: Player("sickness", "it"),
    Slaughter: Player("Slaughter", "fi"),
    Szturm: Player("Szturm", "pl"),
    Tom: Player("Tom", "pl"),
    tuhmapoika: Player("tuhmapoika", "fi"),
    Viag : Player("Viag ", "ca"),
}
