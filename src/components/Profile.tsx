import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext } from "react";
import LogoutButton from "../objects/Logout";
import { NavLink, Navigate } from "react-router-dom";

const Profile = () => {
    const { user, isLoading } = useAuth0();

    console.log(user);
    

    if (isLoading) {
    return <div>Loading ...</div>;
    }

    

    return (
        <>
            <div className="flex justify-center items-center w-full h-screen">
                <div>
                    <p className="text-5xl mb-3">Profile page</p>
                    <div className="flex">
                        <div className="w-44 h-44">
                            <img src={user?.picture} alt={user?.name} className="w-full h-full"/>
                        </div>
                        <div>
                            <h2 className="text-3xl px-3">{user?.sub}</h2>
                            <h2 className="text-3xl px-3">{user?.name}</h2>
                            <p className="text-3xl px-3">{user?.email}</p>
                            <div className="text-3xl px-3">
                                <LogoutButton/>
                                <p onClick={()=>{
                                <Navigate to='/Home' />
                                console.log('gotohome')
                                
                                }}
                                >Home
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    // isAuthenticated && (
    //     <div>
    //     <img src={user?.picture} alt={user?.name} />
    //     <h2>{user?.sub}</h2>
    //     <h2>{user?.name}</h2>
    //     <p>{user?.email}</p>
    //     <p>{user?.admin}</p>
    //     </div>
    // )
    );
};

export default Profile;