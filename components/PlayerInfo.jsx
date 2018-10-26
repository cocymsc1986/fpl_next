import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Styles from '../styles/player-info-styles';

const PlayerInfo = ({
	data: { loading, error, player }
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return "Error loading player."
	}

	const {
		code,
		team_code,
		web_name,
		first_name,
		second_name,
		squad_number,
		total_points,
		goals_scored,
		assists,
		bonus
	 } = player;

	return (
		<section className="c-player">
			<style jsx>{Styles}</style>
			<header className="c-player__header">
				<div className="c-player__header-container">
					<div>
						<img className="c-player__header-image" src={`https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p${code}.png`} alt={web_name}/>
					</div>
					<div className="c-player__header-info">
						<h2>{ squad_number }. { first_name } { second_name }</h2>
						<p>Points: <span className="c-player__header-values">{ total_points }</span></p>
						<p>Goals: <span className="c-player__header-values">{ goals_scored }</span></p>
						<p>Assists: <span className="c-player__header-values">{ assists }</span></p>
						<p>Bonus: <span className="c-player__header-values">{ bonus }</span></p>
						<img className="c-player__header-team" src={`https://platform-static-files.s3.amazonaws.com/premierleague/badges/t${team_code}.svg`} alt='team logo' />
					</div>
				</div>
			</header>
		</section>
	)
}

const player = gql`
	query player($id: Int) {
	player(id: $id) {
			first_name
			second_name
			web_name
			squad_number
			selected_by_percent
			total_points
			goals_scored
			assists
			bonus
			transfers_in_event
			transfers_out_event
			form
			value_form
			code
			team_code
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