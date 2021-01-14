import React,{useState, useEffect} from 'react'
import User from './User.js'
import axios from 'axios'
import AddUserForm from './AddUserForm'
//import pic1 from './images/contact.jpg'
import SeacrhbyRentLimit from './SeacrhbyRentLimit.js'
import SearchBedRoomSize from './SearchBedRoomSize.js'


export default function UserMain(props){
const [user,setUser] = useState([])
    
    function getUser(){
        axios.get("/users")
        
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }

    function searchByRentLimit(searchItem){
        console.log(searchItem)
        axios.get(`/users/search/limit/${searchItem}`)
        
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }

    
    function searchByBedroomSize(searchItem){
        console.log(searchItem)
        axios.get(`/users/search/size/${searchItem}`)
        
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }
    
    
    function searchUserID(searchItem){
        console.log(searchItem)
        axios.get(`/contacts/${searchItem}`)
        
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }
    function addUser(newUser){
        axios.post("/users",newUser)
        .then(res => {
            setUser(prevUser => [...prevUser, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteUser(userId){
        axios.delete(`/users/${userId}`)
        .then(res => {
            setUser(prevUser => prevUser.filter(user=>user._id !== userId))
        })
        .catch(err => console.log(err))
    }

    function editUser(updates, userId){
        axios.put(`/users/${userId}`, updates)
        .then(res => {
            console.log(res.data)
            setUser(prevUser => prevUser.map(user => user._id !== userId ? user : res.data))
            console.log(res.data)
        })
        .catch(err=>console.log(err))
}

    useEffect(() => {
       getUser()
    },[]) 
  return (
    <div>
        <div className="grid-container">
      <div className="menu"> 
        
        <AddUserForm 
            submit={addUser} btnText="Add Participant"
        /></div>
        <div className="main">{
            user.map(user=> 
                <User
                    {...user}
                    key={user._id}
                    deleteUser={deleteUser}
                    editUser={editUser}
                    />)
                    
            }</div>
        <div className="right">
            <SeacrhbyRentLimit 
                submit={searchByRentLimit}
            />
             <SearchBedRoomSize 
                submit={searchByBedroomSize}
            />
              <button onClick={getUser}>Reset Participants List</button>    
            
            {/* <FilterBySaved 
                submit={filterBySaved}
            /> */}</div>
    </div></div>
  )
}
