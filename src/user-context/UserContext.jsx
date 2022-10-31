import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListner, signOutUser } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})


const UserProvider = ({ children }) => {
    useEffect(()=>{
        signOutUser();
        onAuthStateChangedListner((user) => console.log(user))
        },[])
        

    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>

};

export default UserProvider;