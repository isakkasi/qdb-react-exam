import { Avatar } from "./top-container/Avatar";

export const SideBar = () => {
    const w3_close = () => undefined;

    return (
        <nav className="w3-sidebar w3-collapse w3-black w3-animate-left pr-sidebar" id="mySidebar" >
            <br />
            <div className="w3-container w3-row">
                <Avatar />
                <div className="w3-col s8 w3-bar">
                    <span>
                        Welcome, <strong>Aleksandar Georgiev</strong>
                    </span>
                    <br />
                    
                    <a href="/" className="w3-bar-item w3-button">
                        <i className="fa fa-angle-right"></i>
                    </a>
                    <a href="/" className="w3-bar-item w3-button">
                        <i className="fa fa-envelope"></i>
                    </a>
                    <a href="/" className="w3-bar-item w3-button">
                        <i className="fa fa-user"></i>
                    </a>
                    <a href="/" className="w3-bar-item w3-button">
                        <i className="fa fa-cog"></i>
                    </a>
                    <a href="/" className="w3-bar-item w3-button">
                        <i className="fa fa-angle-left"></i>
                    </a>
                </div>
            </div>
            <hr />
            <div className="w3-container">
                <h5>
                    <strong>Menu</strong>
                </h5>
            </div>
            <div className="w3-bar-block">
                <a href="/" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={w3_close} title="close menu">
                    <i className="fa fa-remove fa-fw"></i>&nbsp; Close Menu
                </a>
                <a href="/" className="w3-bar-item w3-button w3-padding w3-blue">
                    <i className="fa fa-users fa-fw"></i>&nbsp; Overview
                </a>
                <a href="/" className="w3-bar-item w3-button w3-padding">
                    <i className="fa fa-eye fa-fw"></i>&nbsp; Views
                </a>
                <a href="/" className="w3-bar-item w3-button w3-padding">
                    <i className="fa fa-users fa-fw"></i>&nbsp; Traffic
                </a>
                <a href="/" className="w3-bar-item w3-button w3-padding">
                    <i className="fa fa-bullseye fa-fw"></i>&nbsp; Geo
                </a>
                <a href="/" className="w3-bar-item w3-button w3-padding">
                    <i className="fa fa-diamond fa-fw"></i>&nbsp; Orders
                </a>
                <a href="/" className="w3-bar-item w3-button w3-padding">
                    <i className="fa fa-bell fa-fw"></i>&nbsp; News
                </a>
                <a href="/" className="w3-bar-item w3-button w3-padding">
                    <i className="fa fa-bank fa-fw"></i>&nbsp; General
                </a>
                <a href="/" className="w3-bar-item w3-button w3-padding">
                    <i className="fa fa-history fa-fw"></i>&nbsp; History
                </a>
                <a href="/" className="w3-bar-item w3-button w3-padding">
                    <i className="fa fa-cog fa-fw"></i>&nbsp; Settings
                </a>
                <br />
                <br />
            </div>
        </nav>
    );
};

// <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={w3_close} style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>
