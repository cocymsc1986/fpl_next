import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";

import Loader from "./Loader";

import Styles from "../styles/highest-rated-styles";

const HighestRated = ({
  data: { loading, error, playersByPropAndPos },
  position,
  teams,
}) => {
  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return `Error loading highest rated ${position}s.`;
  }

  const getTeamName = (id) => {
    return teams.find((team) => team.id === id).short_name;
  };

  if (playersByPropAndPos) {
    const { players } = playersByPropAndPos;
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

const playersByPropAndPos = gql`
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

export default graphql(playersByPropAndPos, {
  options: (props) => ({
    variables: {
      prop: "total_points",
      position: props.position,
      amount: 10,
    },
  }),
  props: ({ data }) => ({
    data,
  }),
})(HighestRated);
