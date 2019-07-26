import React from "react";
import { withRouter } from "next/router";

import Main from "../lib/Main";
import withData from "../lib/withData";
import TeamInfo from "../components/TeamInfo";

export default withData(
  withRouter(props => (
    <Main>
      <TeamInfo id={props.router.query.id} />
    </Main>
  ))
);
