import React, { useContext, useState } from 'react'
import LoginButton from '../objects/Login'
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom';


const LoginPage = () => { 

    const { isLoading } = useAuth0();

    

    return (
        <>
            <div className='flex justify-center items-center w-full h-screen'>
                {
                    isLoading ? (
                        <div>Loading ...</div>
                    ) : (

                    <div>
                        <p className='text-5xl font-semibold'>Login to campusbytes</p>
                        <div className='w-full h-6 flex justify-center items-center mt-10 text-2xl font-medium'>
                        <LoginButton />

                        </div>
                    </div>
                    )
                }
            </div>
        </>
    )
}
export default LoginPage
