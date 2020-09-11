import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";

import { HighestRatedContainer } from "./HighestRatedContainer";
import { MostPopularContainer } from "./MostPopularContainer";
import { FixturesAndResults } from "./FixturesAndResults";
import { Loader } from "./Loader";

const ALL_TEAMS_QUERY = gql`
  query allTeams {
    allTeams {
      teams {
        id
        code
        name
        short_name
      }
    }
  }
`;

export const DataSection = () => {
  const { loading, error, data } = useQuery(ALL_TEAMS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return "Error loading teamData.";
  }

  const { allTeams } = data;

  return (
    <Fragment>
      <MostPopularContainer teamData={allTeams} />
      <HighestRatedContainer teamData={allTeams} />
      <FixturesAndResults teamData={allTeams} />
    </Fragment>
  );
};
