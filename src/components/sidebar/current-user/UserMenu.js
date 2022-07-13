import "./CurrentUser.css"

export const UserMenu = () => {
    return (
        <div className="w3-center">
            <a href="/" className="user-menu-btn">
                <i className="fa fa-angle-right"></i>
            </a>
            <a href="/" className="user-menu-btn">
                <i className="fa fa-envelope"></i>
            </a>
            <a href="/" className="user-menu-btn">
                <i className="fa fa-user"></i>
            </a>
            <a href="/" className="user-menu-btn">
                <i className="fa fa-cog"></i>
            </a>
            <a href="/" className="user-menu-btn">
                <i className="fa fa-angle-left"></i>
            </a>
        </div>
    );
};
