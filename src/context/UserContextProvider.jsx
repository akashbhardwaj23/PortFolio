import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
        const [state, setState] = React.useState(false)

        return (
            <UserContext.Provider value ={{state, setState}}>
                {children}
            </UserContext.Provider>
        )
}

export default UserContextProvider