import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';


export const RoleGuard = ({ role, children }) => {
    const { auth } = useContext(AuthContext);


    if (auth.role !== role) {
        return <Navigate to="/" replace />;
    }

    return children ? children : <Outlet />;
};

