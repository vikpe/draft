// NOTE: team keys, ids and player names are case sensitive

export const pickOrder = [
    // indexes, see below
    0, 1, 2, 3, 4, 5, 6, 7,
    0, 1, 2, 3, 4, 5, 6, 7,
    0, 1, 2, 3, 4, 5, 6, 7,
    0, 1, 2, 3, 4, 5, 6, 7,
];

export const teams = {

    Team1: {
        id: "Team1",
        playerNames: [],
        index: 0,
    },
    Team2: {
        id: "Team2",
        playerNames: [],
        index: 1,
    },
    Team3: {
        id: "Team3",
        playerNames: [],
        index: 2,
    },
    Team4: {
        id: "Team4",
        playerNames: [],
        index: 3,
    },
    Team5: {
        id: "Team5",
        playerNames: [],
        index: 4,
    },
    Team6: {
        id: "Team6",
        playerNames: [],
        index: 5,
    },
    Team7: {
        id: "Team7",
        playerNames: [],
        index: 6,
    },
    Team8: {
        id: "Team8",
        playerNames: [],
        index: 7,
    }
};

const Player = (name, country_code) => ({name, country_code});

export const players = {
    coj: Player("coj", "us"),
    ocoini: Player("ocoini", "no"),
    RaggA: Player("RaggA", "ir"),
    Riki: Player("Riki", "pl"),
    d2: Player("d2 (lolek)", "pl"),
    rusti: Player("rusti", "fi"),
    Hooraytio: Player("Hooraytio", "se"),
    alicesoderlund: Player("alicesoderlund", "se"),
    paniagua: Player("paniagua", "fi"),
    sickness: Player("sickness", "it"),
    Szturm: Player("Szturm", "pl"),
    Flamer: Player("Flamer", "cz"),
    andyblub: Player("andyblub", "de"),
    FinalExit: Player("FinalExit", "se"),
    ekz: Player("ekz", "se"),
    Crp: Player("Crp", "se"),
    gLAd: Player("gLAd", "ru"),
    HaraldQuake: Player("HaraldQuake", "de"),
    Slaughter: Player("Slaughter", "fi"),
    floc: Player("floc", "de"),
    Nautilus: Player("Nautilus", "gb"),
    Milton: Player("Milton", "fi"),
    tuhmapoika: Player("tuhmapoika", "fi"),
    eppe: Player("eppe", "se"),
    kwon: Player("kwon", "de"),
    gosciu: Player("gosciu", "pl"),
    rghst: Player("rghst", "de"),
    rob: Player("rob", "no"),
    Link: Player("Link", "no"),
    dobeZz: Player("dobeZz", "_scotland"),
    nigve: Player("nigve", "no"),
    ok98: Player("ok98", "se"),
    Annihilator: Player("Annihilator", "de"),
    Tom: Player("Tom", "pl"),
    badsebi: Player("badsebi", "pl"),
    IronmaneN: Player("IronmaneN", "pl"),
    fgh: Player("fgh", "se"),
    creature: Player("creature", "fi"),
    gore: Player("gore", "gb"),
    himmu: Player("himmu", "fi"),
}
