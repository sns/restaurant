import { Route as RouteItem } from "@common/models";
import About from "@src/common/components/about";
import Menu from "@src/menu/containers/menu";
import Home from "@src/common/components/home";

export const routes: RouteItem[] = [
    {
        key: "home",
        label: "Home",
        path: "/",
        component: Home,
        exact: true,
    },
    {
        key: "menu",
        label: "Menu",
        path: "/menu",
        component: Menu,
    },
    {
        key: "about",
        label: "About",
        path: "/about",
        component: About,
    },
];

export default routes;
