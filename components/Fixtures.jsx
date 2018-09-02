import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

const Fixtures = ({
	data: { loading, error, fixtures: FixtureData },
	teamData: { teams },
	loadNewFixtures
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return `Error loading fixtures.`
	}

	const getTeamName = id => {
		return teams[id - 1].short_name
	}

	const { fixtures } = FixtureData;
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
						<li key={i}>{getTeamName(team_h)} {started ? `${team_h_score} : ${team_a_score}` : `${kickoff_time_formatted}`} {getTeamName(team_a)}</li>
					)
				})}
			</ul>
			<button onClick={() => loadNewFixtures(FixtureData.id - 1)}>Previous</button>
			<button onClick={() => loadNewFixtures(FixtureData.id + 1)}>Next</button>
		</div>
	)
}

const fixtures = gql`
	query fixtures($id: Int) {
		fixtures(id: $id) {
			fixtures {
				started
				kickoff_time_formatted
				team_a
				team_h
				team_a_score
				team_h_score
			}
			id
		}
	}
`

export default graphql(fixtures, {
  props: ({ data }) => ({
    data,
    loadNewFixtures: id => {
      return data.fetchMore({
        variables: {
          id
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, {
            fixtures: fetchMoreResult.fixtures
          })
        }
      })
    }
  })
})(Fixtures)