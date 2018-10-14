import React from 'react';

import Fixtures from './Fixtures';
import UpcomingFixtures from './UpcomingFixtures';
import Styles from '../styles/fixtures-and-results-styles';

export const FixturesAndResults = ({ teamData }) => {
	return (
		<div className="c-fixtures-and-results">
			<style jsx>{Styles}</style>
			<h2 className="c-fixtures-and-results__header">Fixtures & Results</h2>
			<section className="c-fixtures-and-results__body">
				<Fixtures teamData={teamData} />
				<UpcomingFixtures teamData={teamData} />
			</section>
		</div>
	)
}

export default FixturesAndResults;