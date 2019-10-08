import * as React from "react";
import HamburgerMenu from "react-hamburger-menu";
import Media from "react-media";
import { NavLink } from "react-router-dom";

import { Route as RouteItem, routes, colors } from "@common/models";

interface Props {
    style?: React.CSSProperties;
}
interface State {
    isHamburgerOpen: boolean;
}

const gridTemplateAreas = `'. logo . ${routes.map(x => x.key).join(" ")}'`;
const gridTemplateColumns = `100px 150px 3fr repeat(${routes.length}, 150px)`;
const gridTemplateAreasMobile = `'. hamburger' ${routes.map(x => `'${x.key} ${x.key}'`).join(" ")}`;
const gridTemplateColumnsMobile = `1fr 100px`;
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
        gridTemplateRows: "50px",
        gridGap: "20px",
        alignContent: "center",
    } as React.CSSProperties,
    navContainerHamburger: {
        display: "grid",
        gridTemplateAreas: `'. hamburger'`,
        gridTemplateColumns: `1fr 100px`,
        gridTemplateRows: "50px",
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
    hamburger: {
        gridArea: "hamburger",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};

const linkStyles = routes.reduce((acc, item) => {
    acc[item.key] = {
        ...styles.navLink,
        gridArea: item.key,
    } as React.CSSProperties;
    return acc;
}, {});

export class NavBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isHamburgerOpen: false
        }
    }

    renderNavLink = (route: RouteItem, index: number) => {
        return (
            <NavLink key={index} style={linkStyles[route.key]} to={route.path} onClick={this.closeHamburgerMenu}>
                {route.label}
            </NavLink>
        );
    };

    renderHamburgerIcon = () => {
        return (
            <div style={styles.hamburger}>
                <HamburgerMenu
                    isOpen={this.state.isHamburgerOpen}
                    menuClicked={this.onHamburgerClick}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </div>
        );
    }

    onHamburgerClick = () => {
        this.setState({
            isHamburgerOpen: !this.state.isHamburgerOpen,
        });
    }

    closeHamburgerMenu = () => {
        this.setState({
            isHamburgerOpen: false,
        });

    }

    renderHamburgerOpen = () => {
        return (
            <div style={styles.navContainerMobile}>
                {this.renderHamburgerIcon()}
                {routes.map((route, index) => this.renderNavLink(route, index))}
            </div>
        );
    };

    renderHamburgerClose = () => {
        return (
            <div style={styles.navContainerHamburger}>
                {this.renderHamburgerIcon()}
            </div>
        );

    }

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
                        matched ? this.state.isHamburgerOpen ? this.renderHamburgerOpen() : this.renderHamburgerClose(): this.renderDesktop()
                    }
                </Media>
            </div>
        );
    }
}
export default NavBar;
