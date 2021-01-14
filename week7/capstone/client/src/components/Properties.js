import React , {useState} from 'react'
import AddPropertyForm from './AddPropertyForm.js';
import AddUserForm from './AddUserForm.js'

export default function Properties(props) {
    const {address, size, limit, location, deleteProperty, editProperty, _id} = props;
    const [editToggle, setEditToggle] = useState(false)
    
    
    
  return (
    
    <div className="contact" >
       { !editToggle ?
          <>
      <form className="contact_form">
    <div className="form_back">
      <div className="item-1"><h5>Address: {address} </h5></div>
      <br></br>
      <div className="item-1">
      <p> Address Zip: {location}</p>
      <p> Size: {size} Bedrooms</p>
      <p> Proposed Rent: ${limit}</p> 
       </div>
       </div>
       <div className="item-1">
       <button className="delete-btn" onClick={()=> deleteProperty(_id)}>Delete</button>
            <button className="edit-btn" onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Edit</button>
           </div> </form>
            
            
            </>
            :
            <>
             <AddPropertyForm  
                 address = {address}
                 size = {size}
                 limit = {limit}
                 location = {location}
                _id={_id}
                 btnText="Submit Edit"
                 submit={editProperty}
                 editToggle = {setEditToggle}
                
                  />
                  <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Close</button>
                  </>
} 
      </div>
  )
}