import { Route as RouteItem } from "@Common/Models";
import About from "@src/Common/Components/About";
import Menu from "@src/Menu/Containers/Menu";
import Home from "@src/Common/Components/Home";

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
  }
];

export default routes;
