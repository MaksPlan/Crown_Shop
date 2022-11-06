import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListner, signOutUser } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})



const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        signOutUser();
        onAuthStateChangedListner((user) => setCurrentUser(user))
    }, [])


   


    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>

};

export default UserProvider;