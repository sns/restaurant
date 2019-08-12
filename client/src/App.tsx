import * as React from "react";
import NavBar from "./Common/Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, Route as RouteItem } from "./Common/Models";

const styles = {
    navBarStyle: {
        position: "fixed",
        width: "100%",
        lineHeight: "60px",
        background: "rgb(73,79, 82)",
    } as React.CSSProperties, 
}

export const App: React.FC = (props) => {
    return (
        <Router>
            <div>
                <NavBar style={styles.navBarStyle} />
                <Switch>
                    {
                        routes.map((route: RouteItem, index: number) => 
                            <Route key={index} path={route.path} component={route.component} exact={route.exact} />)
                    }
                 </Switch>
            </div>
        </Router>
    );
};

export default App;