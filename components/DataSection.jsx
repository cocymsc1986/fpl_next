import React, { Fragment } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import HighestRatedContainer from "./HighestRatedContainer";
import MostPopularContainer from "./MostPopularContainer";
import FixturesAndResults from "./FixturesAndResults";
import Loader from "./Loader";

const DataSection = ({ data: { loading, error, allTeams } }) => {
  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return "Error loading teamData.";
  }

  return (
    <Fragment>
      <MostPopularContainer teamData={allTeams} />
      <HighestRatedContainer teamData={allTeams} />
      <FixturesAndResults teamData={allTeams} />
    </Fragment>
  );
};

const allTeams = gql`
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

export default graphql(allTeams, {
  props: ({ data }) => ({
    data
  })
})(DataSection);
