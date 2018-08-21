import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const PlayerInfo = ({
	data: { loading, error, player }
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return "Error loading player."
	}

	return (
		<div>
			<img src={`https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p${player.code}.png`} alt={player.web_name}/>
			{ player.web_name }
			{ player.total_points }
		</div>
	)	
}

const player = gql`
  query player($id: Int) {
    player(id: $id) {
			web_name
			selected_by_percent
			total_points
			transfers_in_event
			transfers_out_event
			form
			value_form
			code
    }
  }
`

export default graphql(player, {
	options: (props) => ({
		variables: {
			id: props.id,
		}
	}),
  props: ({ data }) => ({
    data
  })
})(PlayerInfo);