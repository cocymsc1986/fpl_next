import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

import Link from "next/link";

import { Loader } from "./Loader";

import Styles from "../styles/upcoming-fixtures-styles";
import {
  getTeamName,
  getTeamShortName,
  getTeamsFixturesAndDifficulties,
} from "../utils/team";

const UPCOMING_FIXTURES_QUERY = gql`
  query getAllTeamsFixtures {
    getAllTeamsFixtures {
      fixtures {
        team_a
        team_h
        team_a_difficulty
        team_h_difficulty
      }
    }
  }
`;

export const UpcomingFixtures = ({ teamData }) => {
  const { loading, error, data } = useQuery(UPCOMING_FIXTURES_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  const [difficultyType, setDifficultyType] = useState("easiest");

  const getFixturesByDifficulty = (amountOfFixtures = 5, amountOfTeams = 5) => {
    const {
      getAllTeamsFixtures: { fixtures },
    } = data;

    const teamFixtureDifficulty = fixtures.map((team, i) =>
      getTeamsFixturesAndDifficulties(team, i + 1, amountOfFixtures)
    );

    const fixtureAverages = teamFixtureDifficulty.sort((a, b) => {
      const sortA = a.fixtures.reduce((previous, current) => {
        return current.difficulty + previous;
      }, 0);
      const sortB = b.fixtures.reduce((previous, current) => {
        return current.difficulty + previous;
      }, 0);

      return sortA / a.fixtures.length - sortB / a.fixtures.length;
    });

    if (difficultyType === "easiest") {
      return fixtureAverages.slice(0, amountOfTeams);
    }

    return fixtureAverages
      .slice(fixtureAverages.length - amountOfTeams, fixtureAverages.length)
      .reverse();
  };

  const updateDifficultyType = () => {
    setDifficultyType(difficultyType === "easiest" ? "hardest" : "easiest");
  };

  const { teams } = teamData;

  if (loading || !teams) {
    return <Loader />;
  }

  if (error) {
    console.log(error);
    return `Error loading fixtures.`;
  }

  const buttonText =
    difficultyType === "easiest" ? "Show Hardest" : "Show Easiest";
  const titleDifficulty = difficultyType === "easiest" ? "Easiest" : "Hardest";

  return (
    <div className="c-upcoming-fixtures">
      <style jsx>{Styles}</style>
      <h3 className="c-upcoming-fixtures__header">
        <span>{titleDifficulty} Upcoming Fixtures (Next 5)</span>
        <span
          className="c-upcoming-fixtures__switch"
          onClick={() => updateDifficultyType()}
        >
          {buttonText}
        </span>
      </h3>
      <table className="c-upcoming-fixtures__table">
        <tbody>
          {getFixturesByDifficulty(5, 5).map((teamInfo, i) => {
            return (
              <tr key={i}>
                <td className="c-upcoming-fixtures__team">
                  <Link
                    href={{ pathname: "/team", query: { id: teamInfo.team } }}
                  >
                    <a>{teams && getTeamName(teams, teamInfo.team)}</a>
                  </Link>
                </td>
                {teamInfo.fixtures.map((fixture, j) => {
                  return (
                    <td className="c-upcoming-fixtures__fixture" key={j}>
                      <p className="c-upcoming-fixtures__fixture-team">
                        {getTeamShortName(teams, fixture.team)} ({fixture.venue}
                        )
                      </p>
                      <p className="c-upcoming-fixtures__fixture-difficulty">
                        {fixture.difficulty}
                      </p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3 className="c-upcoming-fixtures__header">
        <span>{titleDifficulty} Upcoming Fixtures (Next 3)</span>
        <span
          className="c-upcoming-fixtures__switch"
          onClick={() => updateDifficultyType()}
        >
          {buttonText}
        </span>
      </h3>
      <table className="c-upcoming-fixtures__table">
        <tbody>
          {getFixturesByDifficulty(3, 5).map((teamInfo, i) => {
            return (
              <tr key={i}>
                <td className="c-upcoming-fixtures__team">
                  <Link
                    href={{ pathname: "/team", query: { id: teamInfo.team } }}
                  >
                    <a>{teams && getTeamName(teams, teamInfo.team)}</a>
                  </Link>
                </td>
                {teamInfo.fixtures.map((fixture, j) => {
                  return (
                    <td className="c-upcoming-fixtures__fixture" key={j}>
                      <p className="c-upcoming-fixtures__fixture-team">
                        {getTeamShortName(teams, fixture.team)} ({fixture.venue}
                        )
                      </p>
                      <p className="c-upcoming-fixtures__fixture-difficulty">
                        {fixture.difficulty}
                      </p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
