import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    reutrn (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    );
}