import React, { Fragment } from "react";

import { MostPopular } from "./MostPopular";
import Styles from "../styles/most-popular-styles";

const mostPopularValues = [
  "selected_by_percent",
  "total_points",
  "transfers_in_event",
  "transfers_out_event",
  "form",
  "value_form",
];

export const MostPopularContainer = () => {
  return (
    <Fragment>
      <style jsx>{Styles}</style>
      <div className="c-most-popular__header">
        <h2>This week's top performers</h2>
      </div>
      <div className="c-most-popular">
        <div className="c-most-popular__wrapper">
          {mostPopularValues.map((value, i) => {
            return <MostPopular key={i} block={i} stat={value} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};
