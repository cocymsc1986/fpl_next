import React from 'react';

import MostPopular from './MostPopular';

const mostPopularValues = [
	'selected_by_percent',
	'total_points',
	'transfers_in_event',
	'transfers_out_event',
	'form',
	'value_form'
];

const MostPopularContainer = () => {
	return (
		mostPopularValues.map(value => {
			return (
				<MostPopular stat={value} />
			)
		})
	);
}

export default MostPopularContainer;