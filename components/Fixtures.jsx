import React from "react";
import { gql, useQuery, NetworkStatus } from "@apollo/client";
import Link from "next/link";

import { Loader } from "./Loader";
import { getTeamName } from "../utils/team";

import Styles from "../styles/fixtures-styles";

const FIXTURES_QUERY = gql`
  query fixtures($id: Int) {
    fixtures(id: $id) {
      fixtures {
        started
        kickoff_time
        team_a
        team_h
        team_a_score
        team_h_score
      }
      id
    }
  }
`;

export const Fixtures = ({ id, teamData }) => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    FIXTURES_QUERY,
    {
      variables: id,
      notifyOnNetworkStatusChange: true,
    }
  );

  const loadingMoreFixtures = networkStatus === NetworkStatus.fetchMore;

  const loadNewFixtures = (id) => {
    fetchMore({
      variables: {
        id,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult.fixtures) {
          return previousResult;
        }
        return Object.assign(
          {},
          {
            fixtures: fetchMoreResult.fixtures,
          }
        );
      },
    });
  };

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return `Error loading fixtures.`;
  }

  const getKOTime = (date) => {
    const convertedDate = new Date(date);
    const day = convertedDate.getDate();
    const month = convertedDate.getMonth() + 1;
    const hours = convertedDate.getHours();
    const minutes = convertedDate.getMinutes();

    return (
      <div>
        <style jsx>{Styles}</style>
        <div>
          {day}/{month}
        </div>
        <div className="c-fixtures__ko-time">
          {hours}:{minutes < 10 && "0"}
          {minutes}
        </div>
      </div>
    );
  };

  const {
    fixtures: { fixtures },
  } = data;

  const { teams } = teamData;

  return (
    <div className="c-fixtures">
      <style jsx>{Styles}</style>
      <div className="c-fixtures__wrapper">
        <table className="c-fixtures__list">
          <thead className="c-fixtures__header">
            <tr>
              <th colSpan="3">
                <h4>Gameweek {id}</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {fixtures &&
              fixtures.map((fixture, i) => {
                const {
                  team_h,
                  team_a,
                  team_h_score,
                  team_a_score,
                  started,
                  kickoff_time,
                } = fixture;
                return (
                  <tr className="c-fixtures__list-item" key={i}>
                    <td className="c-fixtures__home">
                      <Link href={{ pathname: "/team", query: { id: team_h } }}>
                        <a>{getTeamName(teams, team_h)}</a>
                      </Link>
                    </td>
                    <td className="c-fixtures__game-status">
                      {started ? (
                        <span className="c-fixtures__score">
                          {team_h_score} : {team_a_score}
                        </span>
                      ) : (
                        getKOTime(kickoff_time)
                      )}
                    </td>
                    <td className="c-fixtures__away">
                      <Link href={{ pathname: "/team", query: { id: team_a } }}>
                        <a>{getTeamName(teams, team_a)}</a>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button
          className="c-fixtures__button"
          onClick={() => loadNewFixtures(id - 1)}
        >
          Previous Week
        </button>
        <button
          className="c-fixtures__button"
          onClick={() => loadNewFixtures(id + 1)}
        >
          Next Week
        </button>
      </div>
    </div>
  );
};
