import React, {createContext, useState} from "react";

const DarkModeContext = createContext()

function DarkModeProvider(props) {
    const [darkMode, setDarkMode] = useState(false)
    const toggleMode = () => {
        setDarkMode( o => !o)
    }

    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, toggleMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider}