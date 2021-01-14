import React from 'react'
import pic from '../images/group.png'
import pic2 from '../images/property.jpg'
import {Link, Route} from 'react-router-dom'


function Home() {
    return(
        <div className="home_form">
            <div>
            <Link to="/user" id="link">
            
                    <h1>Participants</h1>
                    <img src={pic}></img>
                    
           
            </Link>
            </div>
            <div>
            <Link to="/properties" id="link">
            
                    <h1>Property Search</h1>
                    <img src={pic2}></img>
           
            </Link>
            </div>
        </div>
    )
}


export default Home