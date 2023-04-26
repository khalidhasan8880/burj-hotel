import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Booked = () => {
    const {user} = useContext(AuthContext)
    if ( user?.emailVerified=== false) {
        return alert('please verify your email first')
    }

    return (
        <div>
            booked
        </div>
    );
};

export default Booked;