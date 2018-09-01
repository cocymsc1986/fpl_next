import React from 'react';

import withData from '../lib/withData';
import Main from '../lib/Main';
import HighestRatedContainer from '../components/HighestRatedContainer';
import MostPopularContainer from '../components/MostPopularContainer';
import Search from '../components/Search';
import Fixtures from '../components/Fixtures';

export default withData(props => (
	<Main>
		Welcome to fantasy prem
		<Search />
		<MostPopularContainer />
		<HighestRatedContainer />
		<Fixtures />
	</Main>
));