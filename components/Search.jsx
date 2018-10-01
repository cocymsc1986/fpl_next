import React, { Fragment, Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link'

import Styles from '../styles/search-styles';

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
					<div className="c-search">
						<style jsx>{Styles}</style>
						<input className="c-search__input" placeholder="Search for a player" onChange={e => this.executeSearch(client, e.target.value)} value={this.state.term}/>
						{searchableData && (
							<ul className="c-search__results-list">
								{searchableData.length ? searchableData.map((player, i) => {
									return (
										<Fragment key={i}>
											<Link href={{ pathname: '/player', query: { id: player.id } }}>
												<li className="c-search__result">{player.first_name} {player.second_name}</li>
											</Link>
										</Fragment>
									)
								}) : 'No results'}
							</ul>
						)}
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