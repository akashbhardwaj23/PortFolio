import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
        const [state, setState] = React.useState(false);
        const [themeMode, setThemeMode] = React.useState("light");
        const [skills, setskills] = React.useState(["HTML","CSS","Javascript","React","Tailwind CSS", "Git","GITHUB","Java","Python","Ethical Hacking","SQL","MongoDB","CLI"])


        React.useEffect(() => {
            document.querySelector('html').classList.remove('light', 'dark');
            document.querySelector('html').classList.add(themeMode); 
          },[themeMode])

        return (
            <UserContext.Provider value ={{state, setState, themeMode, setThemeMode, skills, setskills}}>
                {children}
            </UserContext.Provider>
        )
}

export default UserContextProvider