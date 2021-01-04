import React, {useState} from 'react'
import {useSelector, connect} from 'react-redux'
import {addUser, removeUser} from '../redux/user'


function User(props) {
  const initInputs = {fullName: props.fullName ||"",phone: props.phone ||"",email: props.email ||""}
  const [inputs, setInputs] = useState(initInputs)
  const [user,setUser] = useState([])


    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        console.log(value)
    }

    function addUser(e){
      if(inputs.fullName !== ""){
      e.preventDefault()
      console.log(inputs)
      // console.log(props.addUser(inputs))
      setUser(props.addUser(inputs))
      }
      console.log(user)
      setInputs(initInputs)
    }

    function removeUser(e){
      console.log(inputs.fullName)
    //   if(!inputs.fullname){
    //     alert("Please enter the name of the contact you would like to delete.")
    // }
      e.preventDefault()
      setUser(props.removeUser(inputs))
      console.log(props.removeUser(inputs))
      
      setInputs(initInputs)
    }
    const users = useSelector(state => state.users)
    // let newUser = users.map((user, index) => {return <ul key={index} id={index}> <p>Name: {user.fullName}<p><p>Phone: {user.phone}<p><p>Email: {user.email}<p></ul>})
    
    
    
  return (
    <>
    <div className="container">
      
      <form>
        Name : <input type="text" name="fullName" value={inputs.fullName} onChange={handleChange} placeholder="Full Name" required/><br></br>
        Phone : <input type="text" name="phone" value={inputs.phone} onChange={handleChange} placeholder="Phone" /><br></br>
        Email : <input type="text" name="email" value={inputs.email} onChange={handleChange} placeholder="Email" /><br></br>
        <button className="add-btn" onClick={addUser}>Add User</button><button className="delete-btn" onClick={removeUser}>Remove User</button>
      </form>
      <form className="list_container">
      <div>{users.map((user, index) => {return <div key={index} id={index}> <h3>Name: {user.fullName}</h3><p>Phone: {user.phone}</p><p>Email: {user.email}</p><hr></hr></div>})}</div></form>
      </div>
     
    </>     
            
  
  )
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addUser: (users) => dispatch(addUser(users)),
    removeUser: (users) => dispatch(removeUser(users))
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (User)