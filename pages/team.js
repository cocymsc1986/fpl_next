import React from "react";
import { withRouter } from "next/router";

import { App } from "../components/App";
import { TeamInfo } from "../components/TeamInfo";

export default withRouter((props) => (
  <App>
    <TeamInfo id={props.router.query.id} />
  </App>
));
