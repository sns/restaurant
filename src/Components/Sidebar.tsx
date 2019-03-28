import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";

const styles = {
    navBarContainer: {
        height: 40,
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
              <Link to="/"  style={styles.navBarItem}>Home</Link>
              <Link to="/about/" style={styles.navBarItem}>About</Link>
              <Link to="/dashboard" style={styles.navBarItem}>Dashboard</Link>
          </div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about/" exact={true} component={About} />
          <Route path="/dashboard" exact={true} component={Dashboard} />
        </div>
      </Router>
    );
  }
}
export default Sidebar;
