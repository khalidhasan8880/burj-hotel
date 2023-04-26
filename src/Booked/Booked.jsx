import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Booked = () => {
    const {user} = useContext(AuthContext)
    if ( user?.emailVerified=== false) {
        alert('please verify your email first')
        return <Navigate to='/'></Navigate>
    }else{
        return (
            <div>
                booked
            </div>
        );
    }

    
};

export default Booked;