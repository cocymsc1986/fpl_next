import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import Styles from "../styles/loader-styles";

export default () => (
  <div>
    <style jsx>{Styles}</style>
    <div className="loader">
      <ClipLoader loading={true} sizeUnit={"px"} size={100} />
    </div>
  </div>
);
