import * as React from "react";
import Media from "react-media";
import { NavLink } from "react-router-dom";

import { Route as RouteItem, routes, colors } from "@Common/Models";

interface Props {
    style?: React.CSSProperties;
}

const gridTemplateAreas = `'. logo . ${routes.map(x => x.key).join(" ")}'`;
const gridTemplateColumns = `100px 150px 3fr repeat(${routes.length}, 150px)`;
const gridTemplateAreasMobile = `${routes.map(x => `'${x.key}'`).join(" ")}`;
const gridTemplateColumnsMobile = `1fr`;
const styles = {
    stickyNavBarStyle: {
        width: "100%",
        position: "sticky",
        background: "white",
        top: 0,
        zIndex: 10,
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
        color: colors.primaryRed,
        height: 30,
    } as React.CSSProperties,
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        textAlign: "center",
        color: colors.primaryRed,
        height: 30,
        gridArea: "logo",
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
                <div style={styles.logo}>
                    <img src="./images/logo.png" />
                </div>
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
