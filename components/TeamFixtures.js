import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { getTeamShortName, getTeamsFixturesAndDifficulties } from '../utils/team';

import Styles from '../styles/team-fixtures-styles';

const TeamFixtures = ({
	data: { loading, error, getTeamsFixtures, allTeams },
	id
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return "Error loading player."
	}

	const { fixtures } = getTeamsFixtures;
	const { teams } = allTeams;

	return (
		<table className="c-team-fixtures">
			<style jsx>{Styles}</style>
			<tbody>
				<tr className="c-team-fixtures__row">
					<td className="c-team-fixtures__item">Fixtures</td>
					{getTeamsFixturesAndDifficulties(fixtures, id).fixtures.map(fixture => {
						return (
							<td className="c-team-fixtures__item">
								{getTeamShortName(teams, fixture.team)} ({fixture.venue})
							</td>
						)
					})}
				</tr>
				<tr className="c-team-fixtures__row">
					<td className="c-team-fixtures__item">Difficulty</td>
					{getTeamsFixturesAndDifficulties(fixtures, id).fixtures.map(fixture => {
						return (
							<td className="c-team-fixtures__item">
								{fixture.difficulty}
							</td>
						)
					})}
				</tr>
			</tbody>
		</table>
	)
}

const getTeamsFixturesQuery = gql`
	query getTeamsFixtures($id: Int, $amount: Int) {
		getTeamsFixtures(id: $id, amount: $amount) {
			fixtures {
				team_a
				team_h
				team_h_difficulty
				team_a_difficulty
			}
		}
	}
`

const allTeams = gql`
	query allTeams {
		allTeams {
			teams {
				id
				code
				name
				short_name
			}
		}
	}
`

export default compose(
  graphql(getTeamsFixturesQuery, {
		options: (props) => ({
			variables: {
				id: props.id,
				amount: 5
			}
		}),
		props: ({ data }) => ({ data }),
	}),
	graphql(allTeams, {
		props: ({ data, ownProps: { data: newData } }) => ({ data: { ...data, ...newData } }),
	}),
)(TeamFixtures);
