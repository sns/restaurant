import * as React from "react";
import Media from "react-media";
import { NavLink } from "react-router-dom";

import { Route as RouteItem, routes } from "@Common/Models";

interface Props {
    style?: React.CSSProperties,
}

const gridTemplateAreas = `'. ${routes.map(x => x.key).join(" ")}'`;
const gridTemplateColumns = `4fr repeat(${routes.length}, 100px)`;
const gridTemplateAreasMobile = `${routes.map(x => `'${x.key}'`).join(" ")}`;
const gridTemplateColumnsMobile = `1fr`;
const styles = {
    navContainer: {
        display: "grid",
        gridTemplateAreas: `${gridTemplateAreas}`,
        gridTemplateColumns: `${gridTemplateColumns}`,
        gridTemplateRows: "auto",
        gridGap: "20px",        
    } as React.CSSProperties,
    navContainerMobile: {
        display: "grid",
        gridTemplateAreas: `${gridTemplateAreasMobile}`,
        gridTemplateColumns: `${gridTemplateColumnsMobile}`,
        gridTemplateRows: "auto",
        gridGap: "20px",
    } as React.CSSProperties,
    navLink: {
        textDecoration: "none",
        textAlign: "center",
        border: "1px dashed",
        color: "white",
    } as React.CSSProperties,
};

const linkStyles = routes.reduce((acc, item) => {
    acc[item.key] = { ...styles.navLink, gridArea: item.key } as React.CSSProperties;
    return acc;
}, {});

export class NavBar extends React.Component<Props> {
    renderNavLink = (route: RouteItem, index: number) => {
        return (
            <NavLink key={index} style={linkStyles[route.key]} to={route.path} >
                {route.label}
            </NavLink>
        );
    }

    renderMobile = () => {
        return(
            <div style={styles.navContainerMobile}>
                {routes.map((route, index) => this.renderNavLink(route, index))}
            </div>
        );
    }

    renderDesktop = () => {
        return (
            <div style={styles.navContainer}>
                {routes.map((route, index) => this.renderNavLink(route, index))}
            </div>
        );

    }
    
    render = () => {
        return (
            <div style={this.props.style}>
                <Media query="(max-width: 760px)">
                    {(matched: boolean) => matched ? this.renderMobile() : this.renderDesktop()} 
                </Media>
            </div>
        );
    }

}

export default NavBar;