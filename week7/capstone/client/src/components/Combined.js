import React, {useState, useEffect} from 'react'
import UserCombined from './UserCombined'
import axios from 'axios'
import PropertiesCombined from './PropertiesCombined'
import SeacrhbyRentLimit from './SeacrhbyRentLimit'
import SearchBedRoomSize from './SearchBedRoomSize'

export default function Combined(props) {
    const [user,setUser] = useState([])
    const [property,setProperty] = useState([])

    const {fullName, size, limit, location, deleteProperty, editProperty,deleteUser, editUser, _id} = props;

    function getUser(){
        axios.get("/users")
        
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }

    function getProperty(){
        axios.get("/properties")
        
        .then(res => setProperty(res.data))
        .catch(err => console.log(err))
    }

    function searchByRentLimit(searchItem){
        console.log(searchItem)
        axios.get(`/users/search/limit/${searchItem}`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))

        axios.get(`/properties/search/limit/${searchItem}`)
        .then(res => setProperty(res.data))
        .catch(err => console.log(err))
        
        


    }

    
    function searchByBedroomSize(searchItem){
        console.log(searchItem)
        axios.get(`/users/search/size/${searchItem}`)
        
        .then(res => setUser(res.data))
        .catch(err => console.log(err))

        axios.get(`/properties/search/size/${searchItem}`)
        
        .then(res => setProperty(res.data))
        .catch(err => console.log(err))
    }
    function clickHandler(){
        getUser()
        getProperty()

    }
    useEffect(() => {
        getUser()
     },[]) 

     useEffect(() => {
        getProperty()
     },[]) 

  return (
    <>
    <div className="grid-container">
            
      <div className="menu">
      <h3>Current Participants</h3>
          {
            user.map(user=> 
                <UserCombined
                    {...user}
                    key={user._id}
                    
                    />)
                    
            }
        </div>
       
        <div className="main">
        <h3>Current Properties</h3>
            {property.map(property=> 
                <PropertiesCombined
                    {...property}
                    key={property._id}
                    
                    />)
                    
            }    
        </div>
        <div className="right">
        <SeacrhbyRentLimit 
                submit={searchByRentLimit}
            />
             <SearchBedRoomSize 
                submit={searchByBedroomSize}
            />
              <button onClick={clickHandler}>Reset Lists</button>    



        </div>
    </div>
    </>
  )
}
