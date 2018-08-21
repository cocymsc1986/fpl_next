import React from 'react';

import Main from '../lib/Main';
import withData from '../lib/withData';
import TeamInfo from '../components/TeamInfo';

export default withData(props => {
	return (
		<Main>
			<TeamInfo id={props.url.query.id} />
		</Main>
	);
});
