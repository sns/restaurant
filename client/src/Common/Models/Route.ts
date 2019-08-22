import { RouteComponentProps } from "react-router";

export interface Route {
    key: string;
    path: string;
    label: string;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    exact?: boolean;
}

export default Route;