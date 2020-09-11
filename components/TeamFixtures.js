import React from "react";
import { gql, useQuery } from "@apollo/client";

import { Loader } from "./Loader";

import {
  getTeamShortName,
  getTeamsFixturesAndDifficulties,
} from "../utils/team";

import Styles from "../styles/team-fixtures-styles";

const GET_TEAMS_FIXTURES_QUERY = gql`
  query getTeamsFixtures($id: Int, $amount: Int) {
    getTeamsFixtures(id: $id, amount: $amount) {
      fixtures {
        team_a
        team_h
        team_h_difficulty
        team_a_difficulty
      }
    }
  }
`;

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

export const TeamFixtures = ({ id }) => {
  const {
    loading: fixturesLoading,
    error: fixturesError,
    data: fixturesData,
  } = useQuery(GET_TEAMS_FIXTURES_QUERY, {
    variables: {
      id,
      amount: 5,
    },
    notifyOnNetworkStatusChange: true,
  });

  const {
    loading: teamsLoading,
    error: teamsError,
    data: teamsData,
  } = useQuery(ALL_TEAMS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (teamsLoading || fixturesLoading) return <Loader />;
  if (teamsError || fixturesError) {
    console.log(teamsError, fixturesError);
    return "Error loading team fixtures.";
  }

  const {
    getTeamsFixtures: { fixtures },
  } = fixturesData;
  const {
    allTeams: { teams },
  } = teamsData;

  return (
    <table className="c-team-fixtures">
      <style jsx>{Styles}</style>
      <tbody>
        <tr className="c-team-fixtures__row">
          <td className="c-team-fixtures__item">Fixtures</td>
          {getTeamsFixturesAndDifficulties(fixtures, id).fixtures.map(
            (fixture, key) => (
              <td className="c-team-fixtures__item" key={`team-name-${key}`}>
                {getTeamShortName(teams, fixture.team)} ({fixture.venue})
              </td>
            )
          )}
        </tr>
        <tr className="c-team-fixtures__row">
          <td className="c-team-fixtures__item">Difficulty</td>
          {getTeamsFixturesAndDifficulties(fixtures, id).fixtures.map(
            (fixture, key) => (
              <td
                className="c-team-fixtures__item"
                key={`team-difficulty-${key}`}
              >
                {fixture.difficulty}
              </td>
            )
          )}
        </tr>
      </tbody>
    </table>
  );
};
