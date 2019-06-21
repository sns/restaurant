import * as React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import About from "./About";
import Menu from "@src/Menu/Containers/Menu";
import Home from "./Home";

const styles = {
  // navBarContainer: {
  //     position: "fixed",
  //     top: 0,
  //     width: "100%",
  //     zIndex:100,
  //     opacity: 0.8,
  //     height: 80,
  //     backgroundColor: "black",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     color: "white",
  // } as React.CSSProperties,
  // navBarItem: {
  //     color: "white",
  //     display: "flex",
  //     flexDirection: "row",
  //     width: 300,
  //     justifyContent: "center",
  //     alignItems: "center",
  // } as React.CSSProperties,
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    height: "10vh",
  } as React.CSSProperties,
  logo: {
    height: 60,
    backgroundImage: `url('${process.env.PUBLIC_URL}/Images/logo1.jpg')`,
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
  navContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
  navLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "5vh",
    // margin: "auto",
    width: 200,
    color: "white",
    textDecoration: "none",
    backgroundColor: "rgba(119, 87, 76, 0.68)",
  } as React.CSSProperties
};
export class Sidebar extends React.Component {
  render() {

    return (
      <Router>
        <div>
          <header style={styles.header}>
            <div className="row end-sm end-md end-lg">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div>
                  <image style={styles.logo} />
                </div>
              </div>

              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8" style={styles.navContainer}>
                <NavLink style={styles.navLink} to="/" >
                  Home
                  </NavLink>
                <NavLink style={styles.navLink} to="/menu" >
                  Menu
                  </NavLink>
                <NavLink style={styles.navLink} to="/about/" >
                  About
                  </NavLink>
              </div>
            </div>
          </header>
          <Route path="/" exact={true} component={Home} />
          <Route path="/menu" exact={true} component={Menu} />
          <Route path="/about/" exact={true} component={About} />
        </div>
      </Router>
    );
  }
}
export default Sidebar;
