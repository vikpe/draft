// NOTE: team keys, ids and player names are case sensitive

export const pickOrder = [
    // indexes, see below
    0, 1, 2, 3, 4, 5, 6, 7,
    0, 1, 2, 3, 4, 5, 6, 7,
    0, 1, 2, 3, 4, 5, 6, 7,
    0, 1, 2, 3, 4, 5, 6, 7,
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
    gLAd: {
        id: "gLAd",
        playerNames: ["gLAd"],
        index: 0,
    }
};

const Player = (name, country_code) => ({name, country_code});

export const players = {
    alicesoderlund: Player("alicesoderlund", "se"),
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
    gLAd: Player("gLAd", "ru"),
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
    RaggA: Player("RaggA", "ir"),
    rghst: Player("rghst", "de"),
    Riki: Player("Riki", "pl"),
    rob: Player("rob", "no"),
    rusti: Player("rusti", "fi"),
    sickness: Player("sickness", "it"),
    Slaughter: Player("Slaughter", "fi"),
    Szturm: Player("Szturm", "pl"),
    Tom: Player("Tom", "pl"),
    tuhmapoika: Player("tuhmapoika", "fi"),
}
