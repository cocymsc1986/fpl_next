import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'

const HighestRated = ({
	data: { loading, error, playersByPropAndPos: { players } }, position
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return `Error loading highest rated ${position}s.`
	}
	return (
		<div>
			{players.map(player => {
				return (
					<ul>
						<Link href={{ pathname: '/player', query: { id: player.id } }}>
							<li>{player.web_name}</li>
						</Link>
						<li>{player.team_code}</li>
						<li>{player.now_cost}</li>
						<li>{player.total_points}</li>
					</ul>
				)
			})}
		</div>
	)	
}

const playersByPropAndPos = gql`
  query playersByPropAndPos($prop: String, $position: String, $amount: Int) {
    playersByPropAndPos(prop: $prop, position: $position, amount: $amount) {
			players {
				id
				web_name
				team_code
				now_cost
				total_points
			}
    }
  }
`

export default graphql(playersByPropAndPos, {
	options: (props) => ({
		variables: {
			prop: 'total_points',
			position: props.position,
			amount: 10
		}
	}),
  props: ({ data }) => ({
    data
  })
})(HighestRated);