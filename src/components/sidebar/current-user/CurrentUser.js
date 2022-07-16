import { useState } from 'react';

import { Avatar } from './Avatar';
import { UserMenu } from './UserMenu';

export const CurrentUser = () => {

    const [user, setUser] = useState({})

    const getUser = (user) => {
        setUser(user)
    }

    return (
        <div className="w3-container w3-row">
            <Avatar />
            <div className="w3-col s8 w3-bar w3-center">
                {user?.username
                ?   <span>
                        Welcome, <strong>{user.username} <br /></strong>
                    </span>
                :   <span>
                        Welcome, <strong>Guest <br /></strong>
                    </span>
                }
                <br />
            </div>
            <UserMenu getUser={getUser}/>
        </div>
    );
};
