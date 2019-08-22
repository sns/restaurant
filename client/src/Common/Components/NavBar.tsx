import * as React from "react";
import Media from "react-media";
import { NavLink } from "react-router-dom";

import { Route as RouteItem, routes, colors } from "@Common/Models";

interface Props {
    style?: React.CSSProperties;
}

const gridTemplateAreas = `'. ${routes.map(x => x.key).join(" ")}'`;
const gridTemplateColumns = `4fr repeat(${routes.length}, 150px)`;
const gridTemplateAreasMobile = `${routes.map(x => `'${x.key}'`).join(" ")}`;
const gridTemplateColumnsMobile = `1fr`;
const styles = {
    stickyNavBarStyle: {
        width: "100%",
        position: "sticky",
        // background: "rgba(90, 61, 40, 0.71)",
        // background: "rgb(111, 45, 9, 0.71)",
        background: colors.primaryOrange,
        top: 0,
    } as React.CSSProperties,
    navContainer: {
        display: "grid",
        gridTemplateAreas: `${gridTemplateAreas}`,
        gridTemplateColumns: `${gridTemplateColumns}`,
        gridTemplateRows: "auto",
        gridGap: "20px",
        height: 60,
        alignContent: "center",
    } as React.CSSProperties,
    navContainerMobile: {
        display: "grid",
        gridTemplateAreas: `${gridTemplateAreasMobile}`,
        gridTemplateColumns: `${gridTemplateColumnsMobile}`,
        gridTemplateRows: "auto",
        gridGap: "20px",
        alignContent: "center",
    } as React.CSSProperties,
    navLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        textAlign: "center",
        color: "white",
        height: 30,
    } as React.CSSProperties,
};

const linkStyles = routes.reduce((acc, item) => {
    acc[item.key] = {
        ...styles.navLink,
        gridArea: item.key,
    } as React.CSSProperties;
    return acc;
}, {});

export class NavBar extends React.Component<Props> {
    renderNavLink = (route: RouteItem, index: number) => {
        return (
            <NavLink key={index} style={linkStyles[route.key]} to={route.path}>
                {route.label}
            </NavLink>
        );
    };

    renderMobile = () => {
        return (
            <div style={styles.navContainerMobile}>
                {routes.map((route, index) => this.renderNavLink(route, index))}
            </div>
        );
    };

    renderDesktop = () => {
        return (
            <div style={styles.navContainer}>
                {routes.map((route, index) => this.renderNavLink(route, index))}
            </div>
        );
    };

    render() {
        return (
            <div
                style={{
                    ...this.props.style,
                    ...styles.stickyNavBarStyle,
                }}
            >
                <Media query="(max-width: 760px)">
                    {(matched: boolean) =>
                        matched ? this.renderMobile() : this.renderDesktop()
                    }
                </Media>
            </div>
        );
    }
}

export default NavBar;
