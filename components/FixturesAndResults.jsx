import React from 'react';

import Fixtures from './Fixtures';
import UpcomingFixtures from './UpcomingFixtures';
import Styles from '../styles/fixtures-and-results-styles';

export const FixturesAndResults = ({ teamData }) => {
	return (
		<div className="c-fixtures-and-results">
			<style jsx>{Styles}</style>
			<h2>Fixtures & Results</h2>
			<Fixtures teamData={teamData} />
			<UpcomingFixtures teamData={teamData} />
		</div>
	)
}

export default FixturesAndResults;