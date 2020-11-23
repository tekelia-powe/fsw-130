import React,{useContext, useState} from "react"
import ThemeContext from "./themeContext"
import "./App.css"

function Main(){
  const darkTheme = useContext(ThemeContext)
  
  
  // const [darkTheme, setDarkTheme] = useState(true)

  // function toggleTheme(){

  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }

  let whichTheme = darkTheme ? "dark": "light"
return (
        
        <div className={`${whichTheme}-theme`}>
          <h1>{`${darkTheme ? "Dark": "Light"}`} Theme</h1>
          {/* <button onClick={toggleTheme}>Switch Theme</button> */}
              </div>
        
    
  )
}


export default Main