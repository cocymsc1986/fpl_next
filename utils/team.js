export const getTeamName = (teams, id) => {
	return teams[id - 1].name;
}

export const getTeamShortName = (teams, id) => {
	return teams[id - 1].short_name;
}

export const getTeamsFixturesAndDifficulties = (team, id, amountOfFixtures = 5) => {
	let difficulty = { team: id, fixtures: [] }

	for (let j = 0; j < amountOfFixtures; j++) {
		if (team[j].team_h === parseInt(id)) {
			difficulty.fixtures.push({ team: team[j].team_a, difficulty: team[j].team_h_difficulty, venue: 'h'});
		} else {
			difficulty.fixtures.push({ team: team[j].team_h, difficulty: team[j].team_a_difficulty, venue: 'a' });
		}
	}

	return difficulty;
};