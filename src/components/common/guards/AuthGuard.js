import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';


export const AuthGuard = ({ children }) => {
    const { auth } = useContext(AuthContext);


    if (!auth._id) {
        return <Navigate to="/" replace />;
    }

    return children ? children : <Outlet />;
};

