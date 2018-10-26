import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Styles from '../styles/upcoming-fixtures-styles';
import { getTeamName, getTeamShortName } from '../utils/team';

const UpcomingFixtures = ({ 
	teamData,
	data: { loading, error, getAllTeamsFixtures }
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return `Error loading fixtures.`
	}

	const { fixtures } = getAllTeamsFixtures; 

	const getEasiestFixtures = (amountOfFixtures = 5, amountOfTeams = 5) => {
		const teamFixtureDifficulty = fixtures.map((team, i) => {
			let difficulty = { team: i + 1, fixtures: [] }

			for (let j = 0; j < amountOfFixtures; j++) {
				if (team[j].team_h === i + 1) {
					difficulty.fixtures.push({ team: team[j].team_a, difficulty: team[j].team_h_difficulty, venue: 'h'});
				} else {
					difficulty.fixtures.push({ team: team[j].team_h, difficulty: team[j].team_a_difficulty, venue: 'a' });
				}
			}

			return difficulty;
		});

		const fixtureAverages = teamFixtureDifficulty.sort((a, b) => {
			const sortA = a.fixtures.reduce((previous, current) => {
				return current.difficulty + previous;
			}, 0);
			const sortB = b.fixtures.reduce((previous, current) => {
				return current.difficulty + previous;
			}, 0);

			return (sortA / a.fixtures.length) - (sortB / a.fixtures.length);
		})

		return fixtureAverages.slice(0, amountOfTeams)
	};

	const { teams } = teamData;

	return (
		<div className="c-upcoming-fixtures">
			<style jsx>{Styles}</style>
			<h3 className="c-upcoming-fixtures__header">Easiest Upcoming Fixtures (Next 5)</h3>
			<table className="c-upcoming-fixtures__table">
				<tbody>
					{getEasiestFixtures().map((teamInfo, i) => {
						return (
							<tr key={i}>
								<td className="c-upcoming-fixtures__team">{getTeamName(teams, teamInfo.team)}</td>
								{teamInfo.fixtures.map((fixture, j) => {
									return (
										<td className="c-upcoming-fixtures__fixture" key={j}>
											<p className="c-upcoming-fixtures__fixture-team">{getTeamShortName(teams, fixture.team)} ({fixture.venue})</p>
											<p className="c-upcoming-fixtures__fixture-difficulty">{fixture.difficulty}</p>
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>

			<h3 className="c-upcoming-fixtures__header">Easiest Upcoming Fixtures (Next 3)</h3>
			<table className="c-upcoming-fixtures__table">
				<tbody>
					{getEasiestFixtures(3, 5).map((teamInfo, i) => {
						return (
							<tr key={i}>
								<td className="c-upcoming-fixtures__team">{getTeamName(teams, teamInfo.team)}</td>
								{teamInfo.fixtures.map((fixture, j) => {
									return (
										<td className="c-upcoming-fixtures__fixture" key={j}>
											<p className="c-upcoming-fixtures__fixture-team">{getTeamShortName(teams, fixture.team)} ({fixture.venue})</p>
											<p className="c-upcoming-fixtures__fixture-difficulty">{fixture.difficulty}</p>
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

const upcomingFixtures = gql`
	query getAllTeamsFixtures {
		getAllTeamsFixtures {
			fixtures {
				team_a
				team_h
				team_a_difficulty
				team_h_difficulty
			}
		}
	}
`

export default graphql(upcomingFixtures, {
  props: ({ data }) => ({
    data
  })
})(UpcomingFixtures)