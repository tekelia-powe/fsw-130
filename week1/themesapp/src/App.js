import React, {useState} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Main from "./Main"
import './App.css';
import ThemeContext from "./themeContext"

function App() {

  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme(){

    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Switch Theme</button> 
      <div className="container">
      <Navbar />
      <Main />
      <Footer />
      </div>
      </ThemeContext.Provider>
      
    </div>
  )
}

export default App;
