import React from 'react'
import {Link, Route} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        
      Rental Portal 
      <div className="header_text">
      <Link to="/" id="link">
            
            <button>Home</button>
            
            
   
    </Link>
      <Link to="/user" id="link">
            
            <button>Participants</button>
            
            
   
    </Link>
    
    <Link to="/properties" id="link">
            
                    <button>Properties</button>
                   
                    
           
            </Link>
            <Link to="/combined" id="link">
            
            <button>Combined Search</button>
           
            
   
    </Link>
      </div>
    </div>
  )
}
