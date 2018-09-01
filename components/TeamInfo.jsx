import React from 'react';
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

const TeamInfo = ({ data: { loading, error, team, playersByTeam }, id }) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return "Error loading team data."
	}

	return (
		<div>
			<img src={`https://platform-static-files.s3.amazonaws.com/premierleague/badges/t${id}.svg`} alt={`${team.name} logo`}/>
			{ team.name }
			{ playersByTeam && playersByTeam.players.map((player, key) => {
				return (
					<div key={key}>
						<div>{player.first_name} {player.web_name}</div>
						<div>{player.form}</div>
						<div>{player.status}</div>
						<div>{player.points_per_game}</div>
						<div>{player.now_cost}</div>
						<div>{player.total_points}</div>
					</div>
				);
			})}
		</div>
	)	
}

const team = gql`
  query team($id: Int) {
    team(id: $id) {
			name
    }
  }
`

const playersByTeam = gql`
  query playersByTeam($team: Int) {
    playersByTeam(team: $team) {
			players {
				id
				element_type
				first_name
				web_name
				form
				status
				points_per_game
				now_cost
				total_points
			}
    }
  }
`

export default compose(
  graphql(team, {
		options: (props) => ({
			variables: {
				id: props.id,
			}
		}),
    props: ({ data }) => ({ data }),
  }),
  graphql(playersByTeam, {
		options: (props) => ({
			variables: {
				team: props.id,
			}
		}),
    props: ({ data, ownProps: { data: newData } }) => ({ data: { ...data, ...newData } }),
  }),
)(TeamInfo);