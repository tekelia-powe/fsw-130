import React,{useContext} from "react"
import ThemeContext from "./themeContext"

function Footer(){
  const darkTheme = useContext(ThemeContext)
  let whichTheme = darkTheme ? "dark": "light"

return (
    <div className={`${whichTheme}-theme`} id="footer">
    <h6>Footer</h6>
    </div>
  )

}
export default Footer