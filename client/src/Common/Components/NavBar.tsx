import * as React from "react"
import Media from "react-media"
import { NavLink } from "react-router-dom"

import { Route as RouteItem, routes } from "@Common/Models"

interface Props {
    style?: React.CSSProperties
}

const gridTemplateAreas = `'. ${routes.map(x => x.key).join(" ")}'`
const gridTemplateColumns = `4fr repeat(${routes.length}, 100px)`
const gridTemplateAreasMobile = `${routes.map(x => `'${x.key}'`).join(" ")}`
const gridTemplateColumnsMobile = `1fr`
const styles = {
    navBarStyle: {
        width: "100%",
        // background: "rgb(73,79, 82)",
        background: "rgba(90, 61, 40, 0.71)",
    } as React.CSSProperties,
    navContainer: {
        display: "grid",
        gridTemplateAreas: `${gridTemplateAreas}`,
        gridTemplateColumns: `${gridTemplateColumns}`,
        gridTemplateRows: "auto",
        gridGap: "20px",
        height: 60,
        alignContent: "center",
        top: 0,
        left: 0,
    } as React.CSSProperties,
    navContainerMobile: {
        display: "grid",
        gridTemplateAreas: `${gridTemplateAreasMobile}`,
        gridTemplateColumns: `${gridTemplateColumnsMobile}`,
        gridTemplateRows: "auto",
        gridGap: "20px",
        alignContent: "center",
        top: 0,
        left: 0,
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
}

const linkStyles = routes.reduce((acc, item) => {
    acc[item.key] = {
        ...styles.navLink,
        gridArea: item.key,
    } as React.CSSProperties
    return acc
}, {})

export class NavBar extends React.Component<Props> {
    renderNavLink = (route: RouteItem, index: number) => {
        return (
            <NavLink key={index} style={linkStyles[route.key]} to={route.path}>
                {route.label}
            </NavLink>
        )
    }

    renderMobile = () => {
        return (
            <div style={styles.navContainerMobile}>
                {routes.map((route, index) => this.renderNavLink(route, index))}
            </div>
        )
    }

    renderDesktop = () => {
        return (
            <div style={styles.navContainer}>
                {routes.map((route, index) => this.renderNavLink(route, index))}
            </div>
        )
    }

    render = () => {
        return (
            <div style={styles.navBarStyle}>
                <Media query="(max-width: 760px)">
                    {(matched: boolean) =>
                        matched ? this.renderMobile() : this.renderDesktop()
                    }
                </Media>
            </div>
        )
    }
}

export default NavBar
