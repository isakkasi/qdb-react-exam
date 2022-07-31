import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import { Avatar } from './Avatar';
import { UserMenu } from './UserMenu';

export const CurrentUser = () => {
    const {auth} = useContext(AuthContext)

    return (
        <div className="w3-container w3-row">
            <Avatar />
            <div className="w3-col s8 w3-bar w3-center">
                {auth?.username
                ?   <span>
                        Welcome, <strong>{auth.username} <br /></strong>
                    </span>
                :   <span>
                        Welcome, <strong>Guest <br /></strong>
                    </span>
                }
                <br />
                <br />
                <br />
            </div>
            <UserMenu />
        </div>
    );
};
