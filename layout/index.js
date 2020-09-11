import { Component } from "react";
import { initGA, logPageView } from "../utils/analytics";

import { Meta } from "../components/Meta";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

class Layout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Meta />
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
