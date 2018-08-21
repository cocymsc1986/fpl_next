import React from 'react';

import Main from '../lib/Main';
import withData from '../lib/withData';
import PlayerInfo from '../components/PlayerInfo';

export default withData(props => {
	return (
		<Main>
			<PlayerInfo id={props.url.query.id} />
		</Main>
	);
});
