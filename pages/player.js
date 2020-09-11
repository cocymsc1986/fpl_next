import React from "react";
import { withRouter } from "next/router";

import { App } from "../components/App";
import { PlayerInfo } from "../components/PlayerInfo";

export default withRouter((props) => (
  <App>
    <PlayerInfo id={props.router.query.id} />
  </App>
));
