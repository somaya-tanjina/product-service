import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const RequiredAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    let location = useLocation();
    if (loading || adminLoading) {
        return (
            <div className="flex items-center justify-center ">
                <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAdmin;
