import React from 'react';
import HighestRated from './HighestRated';

const HighestRatedRow = () => {
	return (
		<div>
			<h2>Top performers</h2>
			<div>
				<HighestRated position='goalkeeper' />
				<HighestRated position='defender' />
				<HighestRated position='midfielder' />
				<HighestRated position='forward' />
			</div>
		</div>
	);
}

export default HighestRatedRow;