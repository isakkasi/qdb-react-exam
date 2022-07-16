import './Header.css'

export const Header = (props) => {
   
    return (
        <div className="w3-bar w3-top w3-red w3-large header" >
            {/* <button className="w3-bar-item w3-button">
                <i className="fa fa-bars"></i> &nbsp;Menu
            </button> */}
            <span className="w3-bar-item w3-right">Plane Care Academy</span>
        </div>
    );
};

