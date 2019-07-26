import React from "react";
import { withRouter } from "next/router";

import Main from "../lib/Main";
import withData from "../lib/withData";
import PlayerInfo from "../components/PlayerInfo";

export default withData(
  withRouter(props => (
    <Main>
      <PlayerInfo id={props.router.query.id} />
    </Main>
  ))
);
