import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

import Styles from '../styles/most-popular-styles';

const MostPopular = ({
	data: { loading, error, playerWithHighestProp: { player } }, stat
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return "Error loading most popular players."
	}

	return (
		<div className="c-most-popular__block">
			<style jsx>{Styles}</style>
			<div className="c-most-popular__block-content">
				<h3>{stat}</h3>
				<h2>
					<Link href={{ pathname: '/player', query: { id: player.id } }}>
						<a>
							{player.web_name}
						</a>
					</Link>
				</h2>
				<h3>{player[stat]}</h3>
			</div>
		</div>
	)	
}

const playerWithHighestProp = gql`
	query playerWithHighestProp($prop: String) {
		playerWithHighestProp(prop: $prop) {
			player {
				id
				web_name
				selected_by_percent
				total_points
				transfers_in_event
				transfers_out_event
				form
				value_form
			}
		}
	}
`

export default graphql(playerWithHighestProp, {
	options: (props) => ({
		variables: {
			prop: props.stat,
		}
	}),
	props: ({ data }) => ({
		data
	})
})(MostPopular);