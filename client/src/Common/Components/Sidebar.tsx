import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Menu from "@src/Menu/Containers/Menu";
import Home from "./Home";

const styles = {
  navBarContainer: {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex:100,
      opacity: 0.8,
      height: 80,
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
  } as React.CSSProperties,
  navBarItem: {
      color: "white",
      display: "flex",
      flexDirection: "row",
      width: 300,
      justifyContent: "center",
      alignItems: "center",
  } as React.CSSProperties,
}
export class Sidebar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div style={styles.navBarContainer}>
            <Link to="/" style={styles.navBarItem}>
              Home
            </Link>
            <Link to="/menu" style={styles.navBarItem}>
              Menu
            </Link>
            <Link to="/about/" style={styles.navBarItem}>
              About
            </Link>
          </div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/menu" exact={true} component={Menu} />
          <Route path="/about/" exact={true} component={About} />
        </div>
      </Router>
    );
  }
}
export default Sidebar;
