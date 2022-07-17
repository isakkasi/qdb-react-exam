export const Title = ({
    icon,
    children,
}) => {
    return (
        <header className="w3-container" style={{ paddingTop: '22px'}}>
            <h5 style={{fontSize: '2rem' }}>
                <b>
                    <i className={icon}></i> {children}
                </b>
            </h5>
        </header>
    );
};
