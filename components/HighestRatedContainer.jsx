import React from 'react';

import HighestRated from './HighestRated';
import Styles from '../styles/highest-rated-styles';

const HighestRatedRow = ({ teamData }) => {
	const { teams } = teamData;

	return (
		<div className="c-highest-rated">
			<style jsx>{Styles}</style>
			<h2>Top performers</h2>
			<div className="c-highest-rated__grid">
				<HighestRated position='goalkeeper' teams={teams} />
				<HighestRated position='defender' teams={teams} />
				<HighestRated position='midfielder' teams={teams} />
				<HighestRated position='forward' teams={teams} />
			</div>
		</div>
	);
}

export default HighestRatedRow;