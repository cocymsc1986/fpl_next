import React, { Fragment } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";

import TeamFixtures from "./TeamFixtures";

import Styles from "../styles/player-info-styles";

const PlayerInfo = ({ data: { loading, error, player } }) => {
  if (loading) return "Loading...";
  if (error) {
    console.log(error);
    return "Error loading player.";
  }

  const {
    first_name,
    second_name,
    web_name,
    squad_number,
    selected_by_percent,
    total_points,
    goals_scored,
    assists,
    bonus,
    transfers_in_event,
    transfers_out_event,
    form,
    value_form,
    code,
    team_code,
    clean_sheets,
    goals_conceded,
    own_goals,
    penalties_saved,
    penalties_missed,
    yellow_cards,
    red_cards,
    saves,
    influence,
    creativity,
    threat,
    event_points,
    now_cost,
    news,
    element_type,
    status,
    chance_of_playing_this_round,
    points_per_game,
    team
  } = player;

  const keeper = element_type === 1;
  const defence = element_type === 2;

  return (
    <section className="c-player">
      <style jsx>{Styles}</style>
      <header className="c-player__header">
        <div className="c-player__header-container">
          <div>
            <img
              className="c-player__header-image"
              src={`https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p${code}.png`}
              alt={web_name}
            />
          </div>
          <div className="c-player__header-info">
            <h2>
              {squad_number && `${squad_number}. `}
              {first_name} {second_name}
            </h2>
            <p>
              Points:{" "}
              <span className="c-player__header-values">{total_points}</span>
            </p>
            {(keeper || defence) && (
              <p>
                Clean sheets:{" "}
                <span className="c-player__header-values">{clean_sheets}</span>
              </p>
            )}
            {keeper && (
              <p>
                Penalties saved:{" "}
                <span className="c-player__header-values">
                  {penalties_saved}
                </span>
              </p>
            )}
            {!keeper && (
              <Fragment>
                <p>
                  Goals:{" "}
                  <span className="c-player__header-values">
                    {goals_scored}
                  </span>
                </p>
                <p>
                  Assists:{" "}
                  <span className="c-player__header-values">{assists}</span>
                </p>
              </Fragment>
            )}
            <Link href={{ pathname: "/team", query: { id: team } }}>
              <a>
                <img
                  className="c-player__header-team"
                  src={`https://platform-static-files.s3.amazonaws.com/premierleague/badges/t${team_code}.svg`}
                  alt="team logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <TeamFixtures id={team} />
      <div className="c-player__body">
        <ul className="c-player__body-list">
          <li>
            Total points: <span>{total_points}</span>
          </li>
          <li>
            Points this week: <span>{event_points}</span>
          </li>
          <li>
            Points per game: <span>{points_per_game}</span>
          </li>
          <li>
            Cost: <span>{now_cost / 10}</span>
          </li>
          <li>
            Status: <span>{status}</span>
          </li>
          <li>
            Value/Form: <span>{value_form}</span>
          </li>
          <li>
            Form: <span>{form}</span>
          </li>
          <li>
            Selected by: <span>{selected_by_percent}%</span>
          </li>
          <li>
            Transferred in this week: <span>{transfers_in_event}</span>
          </li>
          <li>
            Transferred out this week: <span>{transfers_out_event}</span>
          </li>
          <li>
            Position: <span>{element_type}</span>
          </li>
          <li>
            Chance of playing:{" "}
            <span>{chance_of_playing_this_round || "Fit"}</span>
          </li>
          <li>
            Goals: <span>{goals_scored}</span>
          </li>
          <li>
            Assists: <span>{assists}</span>
          </li>
          <li>
            Clean sheets: <span>{clean_sheets}</span>
          </li>
          <li>
            Goals conceded: <span>{goals_conceded}</span>
          </li>
          <li>
            Own goals: <span>{own_goals}</span>
          </li>
          <li>
            Penalties saved: <span>{penalties_saved}</span>
          </li>
          <li>
            Penalties missed: <span>{penalties_missed}</span>
          </li>
          <li>
            Yellow cards: <span>{yellow_cards}</span>
          </li>
          <li>
            Red cards: <span>{red_cards}</span>
          </li>
          <li>
            Saves: <span>{saves}</span>
          </li>
          <li>
            Bonus: <span>{bonus}</span>
          </li>
          <li>
            Influence: <span>{influence}</span>
          </li>
          <li>
            Creativity: <span>{creativity}</span>
          </li>
          <li>
            Threat: <span>{threat}</span>
          </li>
          <li>
            News: <span>{news || "None"}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

const player = gql`
  query player($id: Int) {
    player(id: $id) {
      first_name
      second_name
      web_name
      squad_number
      selected_by_percent
      total_points
      goals_scored
      assists
      bonus
      transfers_in_event
      transfers_out_event
      form
      value_form
      code
      team_code
      assists
      clean_sheets
      goals_conceded
      own_goals
      penalties_saved
      penalties_missed
      yellow_cards
      red_cards
      saves
      influence
      creativity
      threat
      event_points
      now_cost
      in_dreamteam
      selected_by_percent
      news
      element_type
      status
      chance_of_playing_this_round
      points_per_game
      team
    }
  }
`;

export default graphql(player, {
  options: props => ({
    variables: {
      id: props.id
    }
  }),
  props: ({ data }) => ({
    data
  })
})(PlayerInfo);
