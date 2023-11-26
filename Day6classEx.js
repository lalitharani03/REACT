// import React, { useContext,useState } from 'react'
// import ThemeContext from './ThemeContext'
// const ThemedComponent = () => {
//     const { theme, toggleTheme } = useContext(ThemeContext)
//     return (
//         <>    
//          <h2 style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
//             hello world
//         </h2>
//             <button onClick={toggleTheme}>CLick here to change theme</button>
//             {theme}
//         </>
//     )
// }
// export default ThemedComponent;

import React, {useState} from "react";
import ThemeContext from "./ThemeContext";
const Theme = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            {children}
        </ThemeContext.Provider >
    )
}
export default Theme;