import React, { Fragment, Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link'

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "",
			searchableData: null
		}
	}

	executeSearch = (client, term) => {
		this.setState({ term }, async () => {
			const { term } = this.state;

			if (!term) {
				this.setState({ searchableData: null });
				return;
			}

			const MAX_NUM_OF_RESULTS = 10;
			const { data: { playersSearch: { players } } } = await client.query({
				query: playersSearch,
				variables: { term, MAX_NUM_OF_RESULTS },
			});
			this.setState({ searchableData: players });
		});
	}

	render() {
		const { searchableData } = this.state;
		return (
			<ApolloConsumer>
				{client => (
					<div>
						<input onChange={e => this.executeSearch(client, e.target.value)} value={this.state.term}/>
							<div>
							{searchableData ? (
								searchableData.map((player, i) => {
									return (
										<Fragment key={i}>
											<Link href={{ pathname: '/player', query: { id: player.id } }}>
												<div>{player.first_name} {player.second_name}</div>
											</Link>
										</Fragment>
									)
								})
							) : (
								'No Results'
							)}
							</div>
					</div>
				)}
			</ApolloConsumer>
		)
	}
}

const playersSearch = gql`
	query playersSearch($term: String) {
		playersSearch(term: $term) {
			players {
				id
				first_name
				second_name
				web_name
			}
		}
	}
`

export default Search;