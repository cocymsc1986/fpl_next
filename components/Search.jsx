import React, { Fragment, useState } from "react";
import { gql, ApolloConsumer } from "@apollo/client";
import Link from "next/link";

import Styles from "../styles/search-styles";

const PLAYERS_SEARCH_QUERY = gql`
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
`;

export const Search = () => {
  const [term, setTerm] = useState("");
  const [searchableData, setSearchableData] = useState(null);

  const executeSearch = async (client, term) => {
    setTerm(term);
    if (!term) {
      setSearchableData(null);
      return;
    }

    const MAX_NUM_OF_RESULTS = 10;
    const {
      data: {
        playersSearch: { players },
      },
    } = await client.query({
      query: PLAYERS_SEARCH_QUERY,
      variables: { term, MAX_NUM_OF_RESULTS },
    });
    setSearchableData(players);
  };

  return (
    <ApolloConsumer>
      {(client) => (
        <div className="c-search">
          <style jsx>{Styles}</style>
          <div className="c-search__wrapper">
            <input
              className="c-search__input"
              placeholder="Search for a player..."
              onChange={(e) => executeSearch(client, e.target.value)}
              value={term}
            />
            {searchableData && (
              <ul className="c-search__results-list">
                {searchableData.length
                  ? searchableData.map((player, i) => {
                      return (
                        <Fragment key={i}>
                          <Link
                            href={{
                              pathname: "/player",
                              query: { id: player.id },
                            }}
                          >
                            <li className="c-search__result">
                              {player.first_name} {player.second_name}
                            </li>
                          </Link>
                        </Fragment>
                      );
                    })
                  : "No results"}
              </ul>
            )}
          </div>
        </div>
      )}
    </ApolloConsumer>
  );
};
