import React from "react";

import { HighestRated } from "./HighestRated";
import Styles from "../styles/highest-rated-styles";

export const HighestRatedContainer = ({ teamData }) => {
  const { teams } = teamData;

  return (
    <div className="c-highest-rated">
      <style jsx>{Styles}</style>
      <h2 className="c-highest-rated__header">Top performers</h2>
      <div className="c-highest-rated__grid">
        <HighestRated position="goalkeeper" teams={teams} />
        <HighestRated position="defender" teams={teams} />
        <HighestRated position="midfielder" teams={teams} />
        <HighestRated position="forward" teams={teams} />
      </div>
    </div>
  );
};
