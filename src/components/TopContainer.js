export const TopContainer = (props) => {
    const open = () => {
        console.log("Clicked: " + props.menu.isOpen);
        props.menu.isOpen = !props.menu.isOpen;
    };
    return (
        <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
            <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={open}>
                <i className="fa fa-bars"></i> &nbsp;Menu
            </button>
            <span className="w3-bar-item w3-right">Plane Care Academy</span>
        </div>
    );
};

/*
// Get the Sidebar
var mySidebar = document.getElementById('mySidebar');

// Get the DIV with overlay effect
var overlayBg = document.getElementById('myOverlay');

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = 'none';
    overlayBg.style.display = 'none';
}
*/
