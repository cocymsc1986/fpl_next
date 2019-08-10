import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import Styles from "../styles/loader-styles";

export default ({ fullScreen = false, size = 100, invert = false }) => (
  <div>
    <style jsx>{Styles}</style>
    <div className={`loader ${fullScreen ? " loader__full-screen" : ""}`}>
      <ClipLoader
        loading={true}
        sizeUnit={"px"}
        size={size}
        color={invert ? "#FFFFFF" : ""}
      />
    </div>
  </div>
);
