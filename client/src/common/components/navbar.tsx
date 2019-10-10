import * as React from "react";
import HamburgerMenu from "react-hamburger-menu";
// import Media from "react-media";
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
const gridTemplateAreasMobile = `'. hamburger'
                                  'linksContainer linksContainer'`;
const gridTemplateColumnsMobile = `1fr 100px`;
const styles = {
    stickyNavBarStyle: {
        width: "100%",
        position: "sticky",
        background: "white",
        top: 0,
        zIndex: 10,
        transition: "background 0.2s ease",
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
        gridTemplateRows: "50px 1fr",
        gridGap: "200px 20px",
        alignContent: "center",
    } as React.CSSProperties,
    navContainerHamburger: {
        display: "grid",
        gridTemplateAreas: `'. logo . hamburger'`,
        gridTemplateColumns: `100px 150px 1fr 100px`,
        gridTemplateRows: "auto",
        alignContent: "center",
        height: 60,
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
        alignItems: "center",
    },
    linksContainer: {
        gridArea: "linksContainer",
        display: "grid",
        gridTemplateAreas: `${routes.map(x => `'${x.key}'`).join(" ")}`,
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto",
        gridGap: 30,
    },
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
            isHamburgerOpen: false,
        };
    }

    renderNavLink = (route: RouteItem, index: number) => {
        return (
            <NavLink
                key={index}
                style={linkStyles[route.key]}
                to={route.path}
                onClick={this.closeHamburgerMenu}
            >
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
                    color="black"
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </div>
        );
    };

    onHamburgerClick = () => {
        this.setState({
            isHamburgerOpen: !this.state.isHamburgerOpen,
        });
    };

    closeHamburgerMenu = () => {
        this.setState({
            isHamburgerOpen: false,
        });
    };

    renderLogo = () => {
        return (
            <div style={styles.logo}>
                <img src="./images/logo.png" />
            </div>
        );
    };

    renderHamburgerOpen = () => {
        return (
            <div style={styles.navContainerMobile}>
                {this.renderHamburgerIcon()}
                <div style={styles.linksContainer}>
                    {routes.map((route, index) =>
                        this.renderNavLink(route, index)
                    )}
                </div>
            </div>
        );
    };

    renderHamburgerClose = () => {
        return (
            <div style={styles.navContainerHamburger}>
                {this.renderLogo()}
                {this.renderHamburgerIcon()}
            </div>
        );
    };

    renderDesktop = () => {
        return (
            <div style={styles.navContainer}>
                {this.renderLogo()}
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
                    height: this.state.isHamburgerOpen ? "100vh" : "100%",
                    background: this.state.isHamburgerOpen
                        ? "rgba(255, 240, 59, 0.85)"
                        : "white",
                    // transform: this.state.isHamburgerOpen
                    //     ? "translateX(0%)"
                    //     : "translateX(-50%)",
                }}
            >
                {this.state.isHamburgerOpen
                    ? this.renderHamburgerOpen()
                    : this.renderHamburgerClose()}

                {/* <Media query="(max-width: 760px)">
                    {(matched: boolean) =>
                        matched
                            ? this.state.isHamburgerOpen
                                ? this.renderHamburgerOpen()
                                : this.renderHamburgerClose()
                            : this.renderDesktop()
                    }
                </Media> */}
            </div>
        );
    }
}
export default NavBar;
