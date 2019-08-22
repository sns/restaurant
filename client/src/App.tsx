import * as React from "react";
import NavBar from "./Common/Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, Route as RouteItem } from "./Common/Models";

export const App: React.FC = props => {
    return (
        <Router>
            <>
                <NavBar />
                <Switch>
                    {routes.map((route: RouteItem, index: number) => (
                        <Route
                            key={index}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    ))}
                </Switch>
            </>
        </Router>
    );
};

export default App;
