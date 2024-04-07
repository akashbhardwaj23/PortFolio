import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
        const [state, setState] = React.useState(false);
        const [themeMode, setThemeMode] = React.useState("light");
        const [skills, setskills] = React.useState([{
            name : "HTML",
            img : '/html.png'
        },{
            name : "CSS",
            img : '/css.png'
        },{
            name : "Javascript",
            img : '/javascript.png'
        },{
            name : "React",
            img:    '/react.png'
        },{
            name : "Tailwind CSS",
            img : '/tailwind-css.png'
        }, {
            name : "Git",
            img : '/git.png'
        },{
            name : "GITHUB",
            img : '/github.png'
        },{
            name : "Java",
            img : '/java.svg'   
        },{
            name : "Python",
            img : '/python.svg' 
        },{
            name : "Ethical Hacking",
            img : '/ethical-hacking.jpg'
        },{
            name : "SQL",
            img : '/sql.svg'
        },{
            name : "MongoDB",
            img : '/mongodb.svg'
        },{
            name : "CLI",
            img : '/cli.png'
        }])


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