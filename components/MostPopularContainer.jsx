import React from 'react';

import MostPopular from './MostPopular';
import Styles from '../styles/most-popular-styles';

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
		<div className="c-most-popular">
			<style jsx>{Styles}</style>
			{mostPopularValues.map((value, i) => {
				return (
					<MostPopular key={i} block={i} stat={value} />
				)
			})}
		</div>
	);
}

export default MostPopularContainer;