import React, { Fragment } from "react";

import Styles from "../styles/footer-styles";

export default () => {
  return (
    <Fragment>
      <style jsx>{Styles}</style>
      <footer className="c-footer">
        <div className="c-footer__container">
          <div>Fantasy Prem Fan Site</div>
          <div>MSC Software Development Ltd</div>
        </div>
      </footer>
    </Fragment>
  );
};
