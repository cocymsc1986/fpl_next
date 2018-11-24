import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import { getTeamName } from '../utils/team';

import Styles from '../styles/fixtures-styles';

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

	const getKOTime = date => {
		const convertedDate = new Date(date);
		const day = convertedDate.getDate();
		const month = convertedDate.getMonth();
		const hours = convertedDate.getHours();
		const minutes = convertedDate.getMinutes();

		return (
			<div>
				<style jsx>{Styles}</style>
				<div>{day}/{month}</div>
				<div className="c-fixtures__ko-time">{hours}:{minutes < 10 && '0'}{minutes}</div>
			</div>
		);
	}

	const { fixtures } = FixtureData;
	return (
		<div className="c-fixtures">
			<style jsx>{Styles}</style>
			<div className="c-fixtures__wrapper">
				<table className="c-fixtures__list">
					<thead className="c-fixtures__header">
						<tr>
							<th colspan="3">
								<h4>Gameweek {FixtureData.id}</h4>
							</th>
						</tr>
					</thead>
					<tbody>
						{fixtures && fixtures.map((fixture, i) => {
							const {
								team_h,
								team_a,
								team_h_score,
								team_a_score,
								started,
								kickoff_time
							} = fixture;
							return (
								<tr className="c-fixtures__list-item" key={i}>
									<td className="c-fixtures__home">
										<Link href={{ pathname: '/team', query: { id: team_h } }}>
											<a>
												{getTeamName(teams, team_h)}
											</a>
										</Link>
									</td>
									<td className="c-fixtures__game-status">{started ? <span className="c-fixtures__score">{team_h_score} : {team_a_score}</span> : getKOTime(kickoff_time)}</td>
									<td className="c-fixtures__away">
										<Link href={{ pathname: '/team', query: { id: team_a } }}>
											<a>
												{getTeamName(teams, team_a)}
											</a>
										</Link>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<button className="c-fixtures__button" onClick={() => loadNewFixtures(FixtureData.id - 1)}>Previous Week</button>
				<button className="c-fixtures__button" onClick={() => loadNewFixtures(FixtureData.id + 1)}>Next Week</button>
			</div>
		</div>
	)
}

const fixtures = gql`
	query fixtures($id: Int) {
		fixtures(id: $id) {
			fixtures {
				started
				kickoff_time_formatted
				kickoff_time
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