import React from 'react';

import withData from '../lib/withData';
import Main from '../lib/Main';

import Search from '../components/Search';
import DataSection from '../components/DataSection';

export default withData(props => (
	<Main>
		<Search />
		<DataSection />
	</Main>
));