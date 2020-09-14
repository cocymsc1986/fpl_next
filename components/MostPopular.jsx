import React from "react";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import { Loader } from "./Loader";

import Styles from "../styles/most-popular-styles";

const PLAYER_WITH_HIGHEST_PROP_QUERY = gql`
  query playerWithHighestProp($prop: String) {
    playerWithHighestProp(prop: $prop) {
      player {
        id
        code
        web_name
        selected_by_percent
        total_points
        transfers_in_event
        transfers_out_event
        form
        value_form
      }
    }
  }
`;

export const MostPopular = ({ stat }) => {
  const { loading, error, data } = useQuery(PLAYER_WITH_HIGHEST_PROP_QUERY, {
    variables: {
      prop: stat,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return (
      <div className="c-most-popular__block">
        <style jsx>{Styles}</style>
        <div className="c-most-popular__block-content">
          <Loader size={60} invert />
        </div>
      </div>
    );
  }

  if (error) {
    console.log(error);
    return "Error loading most popular players.";
  }

  const { playerWithHighestProp } = data;

  const statMap = {
    selected_by_percent: "Most Selected",
    total_points: "Total Points",
    transfers_in_event: "Most In This Week",
    transfers_out_event: "Most Out This Week",
    form: "Form",
    value_form: "Best Value",
  };

  const { player } = playerWithHighestProp;

  return (
    <div className="c-most-popular__block">
      <style jsx>{Styles}</style>
      <div className="c-most-popular__block-content">
        <h3>{statMap[stat]}</h3>
        <h2>
          <Link href={{ pathname: "/player", query: { id: player.id } }}>
            <a>{player.web_name}</a>
          </Link>
        </h2>
        <h3 className="c-most-popular__value">
          {player[stat]}
          {stat === "selected_by_percent" && "%"}
        </h3>
        <div className="c-most-popular__image-container">
          <img
            className="c-most-popular__image"
            src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}
            alt={player.web_name}
          />
        </div>
      </div>
    </div>
  );
};
