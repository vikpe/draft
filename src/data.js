export const pickOrder = [
	1, 2, 3, 4, 5, 6, 7, 
	6, 7, 5, 4, 3, 2, 1, 
	3, 5, 2, 1, 7, 4, 6, 
	1, 4, 2, 6, 7, 3, 5,
].map((n) => n - 1);

const captains = [
	["Zepp", "RU"],
	["snapcase", "SE"],
	["PreMorteM", "NO"],
	["Macisum", "NO"],
	["paniagua", "FI"],
	["HangTime", "GB"],
	["nas", "SE"],
];

const player_pool = [
	["AHemlocksLie", "US"],
	["alice", "SE"],
	["Anza", "FI"],
	["bass", "SE"],
	["biggz", "IS"],
	["bjarke", "DK"],
	["Calinou", "FR"],
	["coj", "US"],
	["darko", "DE"],
	["diehuman", "PT"],
	["Dobezz", "GB"],
	["doomie", "PL"],
	["duce", "DE"],
	["Ekz", "SE"],
	["Evil", "UA"],
	["Flamer", "CZ"],
	["Flash", "CA"],
	["floc", "DE"],
	["gLAd", "RU"],
	["Grc", "SE"],
	["HaraldQuake", "DE"],
	["himmu", "FI"],
	["Hooraytio", "SE"],
	["kip", "FI"],
	["kwon", "DE"],
	["lethalwiz", "SE"],
	["Link", "NO"],
	["Locktar", "SE"],
	["milamber", "HU"],
	["musi", "HU"],
	["myca", "PL"],
	["neophyte", "HU"],
	["Nexus", "FI"],
	["Nico", "US"],
	["NinJaA", "HU"],
	["nlk", "RU"],
	["ocoini", "NO"],
	["Pamppu", "FI"],
	["PhenomenA", "SE"],
	["Pitbull", "LT"],
	["RaggA", "IE"],
	["raket", "SE"],
	["ratatat", "SE"],
	["rghst", "DE"],
	["Riki", "PL"],
	["robin", "NO"],
	["rotker", "PL"],
	["rusti", "FI"],
	["sailorman", "SE"],
	["Slaughter", "FI"],
	["spokz", "PL"],
	["Szturm", "PL"],
	["tr0ll", "NO"],
	["tuhmapoika", "FI"],
	["tumult", "SE"],
	["Veggie", "US"],
	["viag", "CA"],
	["wallu", "FI"],
	["XuMuK", "RU"],
	["ztranger", "PT"],
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
