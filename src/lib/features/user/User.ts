import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface UserState {
    state : boolean,
    themeMode : string,
    skills : string[]
}



const initialState : UserState = {
    state : false,
    themeMode : "light",
    skills : [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Tailwind CSS",
        "Git",
        "GITHUB",
        "Java",
        "Python",
        "Ethical Hacking",
        "SQL",
        "MongoDB",
        "CLI",
    ]
}


export const UserSlice = createSlice(
    {
        name : "myPortfolio",
        initialState,
        reducers: {
            setState : (state, action) => {
                state.state = action.payload.state;
            },
            setThemeMode : (state, action) => {
                state.themeMode = action.payload.themeMode;
            }
        }
    }
)