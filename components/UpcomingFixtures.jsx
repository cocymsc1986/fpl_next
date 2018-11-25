import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Link from 'next/link';

import Styles from '../styles/upcoming-fixtures-styles';
import { getTeamName, getTeamShortName, getTeamsFixturesAndDifficulties } from '../utils/team';

class UpcomingFixtures extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			difficultyType: 'easiest',
		}
	}

	getFixturesByDifficulty(amountOfFixtures = 5, amountOfTeams = 5) {
		const { fixtures } = this.props.data.getAllTeamsFixtures; 
		const { difficultyType } = this.state;

		const teamFixtureDifficulty = fixtures.map((team, i) => (
			getTeamsFixturesAndDifficulties(team, i + 1, amountOfFixtures)
		));

		const fixtureAverages = teamFixtureDifficulty.sort((a, b) => {
			const sortA = a.fixtures.reduce((previous, current) => {
				return current.difficulty + previous;
			}, 0);
			const sortB = b.fixtures.reduce((previous, current) => {
				return current.difficulty + previous;
			}, 0);

			return (sortA / a.fixtures.length) - (sortB / a.fixtures.length);
		});

		if (difficultyType === 'easiest') {
			return fixtureAverages.slice(0, amountOfTeams);
		}

		return fixtureAverages.slice(fixtureAverages.length - amountOfTeams, fixtureAverages.length).reverse();
	};

	updateDifficultyType() {
		this.setState({
			difficultyType: this.state.difficultyType === 'easiest' ? 'hardest' : 'easiest'
		})
	}

	render() {
		const { data: { loading, error }, teamData: { teams } } = this.props;
		const { difficultyType } = this.state;

		if (loading || !teams) {
			return (
				<div>Loading...</div>
			)
		}

		if (error) {
			console.log(error)
			return `Error loading fixtures.`
		}

		const buttonText = difficultyType === 'easiest' ? 'Show Hardest' : 'Show Easiest';
		const titleDifficulty = difficultyType === 'easiest' ?  'Easiest' : 'Hardest';

		return (
			<div className="c-upcoming-fixtures">
				<style jsx>{Styles}</style>
				<h3 className="c-upcoming-fixtures__header"><span>{titleDifficulty} Upcoming Fixtures (Next 5)</span><span className="c-upcoming-fixtures__switch" onClick={() => this.updateDifficultyType()}>{buttonText}</span></h3>
				<table className="c-upcoming-fixtures__table">
					<tbody>
						{this.getFixturesByDifficulty(5, 5).map((teamInfo, i) => {
							return (
								<tr key={i}>
									<td className="c-upcoming-fixtures__team">
										<Link href={{ pathname: '/team', query: { id: teamInfo.team }}}>
											<a>
												{teams && getTeamName(teams, teamInfo.team)}
											</a>
										</Link>
									</td>
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
	
				<h3 className="c-upcoming-fixtures__header"><span>{titleDifficulty} Upcoming Fixtures (Next 3)</span><span className="c-upcoming-fixtures__switch" onClick={() => this.updateDifficultyType()}>{buttonText}</span></h3>
				<table className="c-upcoming-fixtures__table">
					<tbody>
						{this.getFixturesByDifficulty(3, 5).map((teamInfo, i) => {
							return (
								<tr key={i}>
									<td className="c-upcoming-fixtures__team">
										<Link href={{ pathname: '/team', query: { id: teamInfo.team }}}>
											<a>
												{teams && getTeamName(teams, teamInfo.team)}
											</a>
										</Link>
									</td>
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