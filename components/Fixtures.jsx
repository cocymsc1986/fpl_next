import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

const Fixtures = ({
	data: { loading, error, currentFixtures }
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return `Error loading fixtures.`
	}

	console.log(currentFixtures)
	const { fixtures } = currentFixtures;
	return (
		<div>
			<ul>
				{fixtures && fixtures.map((fixture, i) => {
					const {
						team_h,
						team_a,
						team_h_score,
						team_a_score,
						started,
						kickoff_time_formatted
					} = fixture;
					return (
						<li key={i}>{team_h} {started ? `${team_h_score} : ${team_a_score}` : `${kickoff_time_formatted}`} {team_a}</li>
					)
				})}
			</ul>
		</div>
	)
}

const currentFixtures = gql`
	query currentFixtures {
		currentFixtures {
			fixtures {
				started
				kickoff_time_formatted
				team_a
				team_h
				team_a_score
				team_h_score
			}
		}
	}
`

export default graphql(currentFixtures, {
	props: ({ data }) => ({
		data
	})
})(Fixtures);