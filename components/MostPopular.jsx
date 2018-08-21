import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MostPopular = ({
	data: { loading, error, playerWithHighestProp: { player } }, stat
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return "Error loading most popular players."
	}

	return (
		<div>
			{ player.web_name }
			{ stat } { player[stat] }
		</div>
	)	
}

const playerWithHighestProp = gql`
  query playerWithHighestProp($prop: String) {
    playerWithHighestProp(prop: $prop) {
			player {
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