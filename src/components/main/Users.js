export const Users =( ) => (
    <div className="w3-container">
                <h5>Recent Users</h5>
                <ul className="w3-ul w3-card-4 w3-white">
                    <li className="w3-padding-16">
                        <img
                            src="/w3images/avatar2.png"
                            alt="avatar2"
                            className="w3-left w3-circle w3-margin-right"
                            style={{width: 35+'px'}}
                        />
                        <span className="w3-xlarge">Mike</span><br />
                    </li>
                    <li className="w3-padding-16">
                        <img
                            src="/w3images/avatar5.png"
                            alt="avatar5"
                            className="w3-left w3-circle w3-margin-right"
                            style={{width: 35 + 'px'}}
                        />
                        <span className="w3-xlarge">Jill</span><br />
                    </li>
                    <li className="w3-padding-16">
                        <img
                            src="/w3images/avatar6.png"
                            alt="avatar6"
                            className="w3-left w3-circle w3-margin-right"
                            style={{width: 35+'px'}}
                        />
                        <span className="w3-xlarge">Jane</span><br />
                    </li>
                </ul>
            </div>
)