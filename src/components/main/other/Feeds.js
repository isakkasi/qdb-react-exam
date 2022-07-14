export const Feeds = () => (
    <div className="w3-panel">
        <div className="w3-row-padding" style={{ margin: `0 -16px` }}>
            <div className="w3-container">
                <h5>Feeds</h5>
                <table className="w3-table w3-striped w3-white">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Answer A</th>
                            <th>Answer B</th>
                            <th>Answer C</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <i className="fa fa-user w3-text-blue w3-large"></i>
                            </td>
                            <td>New record, over 90 views.</td>
                            <td>
                                <i>10 mins</i>
                            </td>
                            <td>New record, over 90 views.</td>
                            <td>
                                <i className="fa fa-pencil w3-text-blue w3-large"></i>
                            </td>
                            <td>
                                <i className="fa fa-trash w3-text-red w3-large"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fa fa-bell w3-text-red w3-large"></i>
                            </td>
                            <td>Database error.</td>
                            <td>
                                <i>15 mins</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fa fa-users w3-text-yellow w3-large"></i>
                            </td>
                            <td>New record, over 40 users.</td>
                            <td>
                                <i>17 mins</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fa fa-comment w3-text-red w3-large"></i>
                            </td>
                            <td>New comments.</td>
                            <td>
                                <i>25 mins</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fa fa-bookmark w3-text-blue w3-large"></i>
                            </td>
                            <td>Check transactions.</td>
                            <td>
                                <i>28 mins</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fa fa-laptop w3-text-red w3-large"></i>
                            </td>
                            <td>CPU overload.</td>
                            <td>
                                <i>35 mins</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fa fa-share-alt w3-text-green w3-large"></i>
                            </td>
                            <td>New shares.</td>
                            <td>
                                <i>39 mins</i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
