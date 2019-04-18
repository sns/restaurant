import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./About";
import Menu from "@src/Menu/Containers/Menu";
import Home from "./Home";

const styles = {
  navBar: {
    textTransform: "uppercase"
  } as React.CSSProperties,
  navBarItem: {
    display: "inline",
    paddingRight: 20,
    textDecoration: "none",
    color: "#888"
  } as React.CSSProperties
};

export class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header className="main-header">
            <div className="container">
              <div className="row center-xs end-sm end-md end-lg middle-xs middlw-sm middle-md middle-lg">
                <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="logo"
                  />
                </div>
                <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                  <nav style={styles.navBar}>
                    <Link to="/" style={styles.navBarItem}>
                      Home
                    </Link>
                    <Link to="/menu" style={styles.navBarItem}>
                      Menu
                    </Link>
                    <Link to="/about" style={styles.navBarItem}>
                      About
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <Route path="/" exact={true} component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about/" component={About} />
        </div>
      </Router>
    );
  }
}
export default NavBar;
