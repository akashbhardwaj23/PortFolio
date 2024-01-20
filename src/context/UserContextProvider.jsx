import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
        const [state, setState] = React.useState(false);
        const [themeMode, setThemeMode] = React.useState("light");

        React.useEffect(() => {
            document.querySelector('html').classList.remove('light', 'dark');
            document.querySelector('html').classList.add(themeMode);
          },[themeMode])

        return (
            <UserContext.Provider value ={{state, setState, themeMode, setThemeMode}}>
                {children}
            </UserContext.Provider>
        )
}

export default UserContextProvider