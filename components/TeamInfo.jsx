import React from "react";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import { TeamFixtures } from "./TeamFixtures";
import { Loader } from "./Loader";

import Styles from "../styles/team-styles";

const TEAM_QUERY = gql`
  query team($id: Int) {
    team(id: $id) {
      name
      code
    }
  }
`;

const PLAYERS_BY_TEAM_QUERY = gql`
  query playersByTeam($team: Int) {
    playersByTeam(team: $team) {
      players {
        id
        element_type
        first_name
        web_name
        form
        status
        points_per_game
        now_cost
        total_points
      }
    }
  }
`;

export const TeamInfo = ({ id }) => {
  const { loading: teamLoading, error: teamError, data: teamData } = useQuery(
    TEAM_QUERY,
    {
      variables: {
        id,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  const {
    loading: playersLoading,
    error: playersError,
    data: playersData,
  } = useQuery(PLAYERS_BY_TEAM_QUERY, {
    variables: {
      team: id,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (teamLoading || playersLoading) return <Loader />;
  if (teamError || playersError) {
    console.log(error);
    return "Error loading team data.";
  }

  const { team } = teamData;
  const { playersByTeam } = playersData;

  return (
    <div className="c-team">
      <style jsx>{Styles}</style>
      <div className="c-team__header">
        <div className="c-team__header-container">
          <div className="c-team__badge">
            <img
              src={`https://resources.premierleague.com/premierleague/badges/t${team.code}.svg`}
              alt={`${team.name} logo`}
            />
          </div>
          <h1 className="c-team__name">{team.name}</h1>
        </div>
      </div>
      <TeamFixtures id={id} />
      <div className="c-team__data">
        <div className="c-team__container">
          <h2 className="c-team__container-header">Player stats</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Form</th>
                <th>Status</th>
                <th>PPG</th>
                <th>Cost</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {playersByTeam &&
                playersByTeam.players.map((player, key) => {
                  return (
                    <tr className="c-team__player-info" key={key}>
                      <td>
                        <Link
                          href={{
                            pathname: "/player",
                            query: { id: player.id },
                          }}
                        >
                          <a className="c-team__player-link">
                            {player.first_name} {player.web_name}
                          </a>
                        </Link>
                      </td>
                      <td>{player.form}</td>
                      <td>{player.status}</td>
                      <td>{player.points_per_game}</td>
                      <td>{player.now_cost / 10}</td>
                      <td>{player.total_points}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
