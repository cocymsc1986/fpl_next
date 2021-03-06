import React from "react";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import { Loader } from "./Loader";

import Styles from "../styles/highest-rated-styles";

const PLAYERS_BY_PROP_AND_POSITION_QUERY = gql`
  query playersByPropAndPos($prop: String, $position: String, $amount: Int) {
    playersByPropAndPos(prop: $prop, position: $position, amount: $amount) {
      players {
        id
        web_name
        team
        now_cost
        total_points
      }
    }
  }
`;

export const HighestRated = ({ position, teams }) => {
  const { loading, error, data } = useQuery(
    PLAYERS_BY_PROP_AND_POSITION_QUERY,
    {
      variables: {
        prop: "total_points",
        position: position,
        amount: 10,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return `Error loading highest rated ${position}s.`;
  }

  const getTeamName = (id) => {
    return teams.find((team) => team.id === id).short_name;
  };

  if (data) {
    const {
      playersByPropAndPos: { players },
    } = data;

    return (
      <div className="c-highest-rated__grid-item">
        <style jsx>{Styles}</style>
        <h3 className="c-highest-rated__title">{position}s</h3>
        <ul className="c-highest-rated__list">
          {players &&
            players.map((player, i) => {
              return (
                <li key={i} className="c-highest-rated__list-item">
                  <div className="c-highest-rated__name">
                    <Link
                      href={{ pathname: "/player", query: { id: player.id } }}
                    >
                      <div>{player.web_name}</div>
                    </Link>
                    <Link
                      href={{ pathname: "/team", query: { id: player.team } }}
                    >
                      <div className="c-highest-rated__team">
                        {getTeamName(player.team)}
                      </div>
                    </Link>
                  </div>
                  <span className="c-highest-rated__cost">
                    {player.now_cost / 10}
                  </span>
                  <span className="c-highest-rated__points">
                    {player.total_points}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
};
