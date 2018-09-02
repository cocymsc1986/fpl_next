import React, { Fragment } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import HighestRatedContainer from '../components/HighestRatedContainer';
import MostPopularContainer from '../components/MostPopularContainer';
import Fixtures from '../components/Fixtures';

const DataSection = ({
	data: { loading, error, allTeams }
}) => {
	if (loading) return "Loading..."
	if (error) {
		console.log(error)
		return "Error loading teamData."
	}

	return (
		<Fragment>
			<MostPopularContainer teamData={allTeams} />
			<HighestRatedContainer teamData={allTeams} />
			<Fixtures teamData={allTeams} />
		</Fragment>
	)	
}

const allTeams = gql`
	query allTeams {
		allTeams {
			teams {
				id
				name
				short_name
			}
		}
	}
`

export default graphql(allTeams, {
	props: ({ data }) => ({
		data
	})
})(DataSection);