import React , {useState} from 'react'
import AddUserForm from './AddUserForm.js'

export default function User(props) {
    const {fullName, size, limit, location, deleteUser, editUser, _id} = props;
    const [editToggle, setEditToggle] = useState(false)
    
    
    
  return (
    
    <div className="contact">
       { !editToggle ?
          <>
      <form className="contact_form">
      <div className="form_back">
      <div className="item-1"><h5>Name: {fullName} </h5></div>
      <br></br>
      <div className="item-1"><p> Bedroom Size: {size}</p>
      <p> Shopping Limit: ${limit}</p> 
        <p> Preferred Location: {location}</p>
        </div>
        
        </div>
        <div className="item-1">
        <button className="delete-btn" onClick={()=> deleteUser(_id)}>Delete</button>
            <button className="edit-btn" onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Edit</button>
          </div>  
            </form>
            
            </>
            :
            <>
             <AddUserForm  
                 fullName = {fullName}
                 size = {size}
                 limit = {limit}
                 location = {location}
                _id={_id}
                 btnText="Submit Edit"
                 submit={editUser}
                 editToggle = {setEditToggle}
                
                  />
                  <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Close</button>
                  </>
} 
      </div>
  )
}