export const pickOrder = [
	1, 2, 3, 4, 5, 6, 7,
	5, 6, 7, 4, 3, 2, 1,
	2, 1, 3, 4, 7, 6, 5,
	1, 6, 7, 5, 4, 3, 2,
].map((n) => n - 1);

const captains = [
	["Creature", "FI"],
	["Gosciu", "PL"],
	["Andeh", "SE"],
	["Zero", "HU"],
	["ParadokS", "DK"],
	["Razor", "SE"],
	["Milton", "FI"],
];

const player_pool = [
	["AHemlocksLie", "US"],
	["alice", "SE"],
	["anni", "DE"],
	["Anza", "FI"],
	["badsebi", "PL"],
	["bjarkeSTAR", "DK"],
	["coj", "US"],
	["cor (lord noob)", "PL"],
	["dobeZz", "GB"],
	["Dragon", "PL"],
	["eh", "FI"],
	["Ekz", "SE"],
	["fix", "FI"],
	["Flamer", "CZ"],
	["floc", "DE"],
	["fluartity", "PL"],
	["gLAd", "RU"],
	["gore", "GB"],
	["grc", "SE"],
	["Hammer", "PT"],
	["HangTime", "GB"],
	["himmu", "FI"],
	["Hooraytio", "SE"],
	["jOn", "SE"],
	["kane", "CZ"],
	["kwon", "DE"],
	["Link", "NO"],
	["lurq", "SE"],
	["mushi", "PT"],
	["MxCraven", "GB"],
	["neophyte", "HU"],
	["Nexus", "FI"],
	["Ocoini", "NO"],
	["paniagua", "FI"],
	["Peppe", "SE"],
	["pharm ", "US"],
	["pixols", "GB"],
	["plast", "PL"],
	["PreMorteM", "NO"],
	["rat", "FI"],
	["rghst", "DE"],
	["Riki", "PL"],
	["robin", "NO"],
	["rokky", "SE"],
	["rotker", "PL"],
	["rusti", "FI"],
	["s4vo", "PL"],
	["samon", "PL"],
	["sham", "PL"],
	["Slaughter", "FI"],
	["SS", "RU"],
	["tr0ll", "NO"],
	["tuhmapoika", "FI"],
	["Tumult", "SE"],
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
