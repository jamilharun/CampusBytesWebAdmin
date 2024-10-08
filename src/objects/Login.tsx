import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CiLogin } from "react-icons/ci";
import { Navigate } from "react-router-dom";



const   LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return <Navigate to='/Home'/> 
    }

    return <button className='navMenu' onClick={() => loginWithRedirect()}>click to Login</button>;
};

export default LoginButton