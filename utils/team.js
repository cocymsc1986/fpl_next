export const getTeamName = (teams, id) => {
	return teams[id - 1].name;
}

export const getTeamShortName = (teams, id) => {
	return teams[id - 1].short_name;
}