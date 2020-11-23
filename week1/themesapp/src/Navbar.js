import React, {useContext} from "react"
import Nav from 'react-bootstrap/Nav'
//import {Link, Switch, Route} from "react-router-dom"
import ThemeContext from "./themeContext"
import "./App.css"

function Navbar(){
  
  const darkTheme = useContext(ThemeContext)
  let whichTheme = darkTheme ? "dark": "light"
  
return (

  
  <div className={`${whichTheme}-theme`} id={`${darkTheme}`}>
  <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/">About</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/">Contact</Nav.Link>
  </Nav.Item>
  
</Nav>
</div>
)}

export default Navbar