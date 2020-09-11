import React from "react";
import Link from "next/link";

import Styles from "../styles/header-styles";

export const Header = () => {
  return (
    <header>
      <style jsx>{Styles}</style>
      <Link href="/">
        <a>
          <h1>Fantasy Prem</h1>
        </a>
      </Link>
    </header>
  );
};
