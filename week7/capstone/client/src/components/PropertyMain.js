import React,{useState, useEffect} from 'react'

import axios from 'axios'
import AddPropertyForm from './AddPropertyForm'
//import pic1 from './images/contact.jpg'
import SeacrhbyRent from './SeacrhbyRentLimit.js'
import SearchBedRoom from './SearchBedRoomSize.js'
import Properties from './Properties'



export default function PropertyMain(props){
const [property,setProperty] = useState([])
    
    function getProperty(){
        axios.get("/properties")
        
        .then(res => setProperty(res.data))
        .catch(err => console.log(err))
    }

    function searchByRent(searchItem){
        console.log(searchItem)
        axios.get(`/properties/search/limit/${searchItem}`)
        
        .then(res => setProperty(res.data))
        .catch(err => console.log(err))
    }

    
    function searchByBedroomSize(searchItem){
        console.log(searchItem)
        axios.get(`/properties/search/size/${searchItem}`)
        
        .then(res => setProperty(res.data))
        .catch(err => console.log(err))
    }
    
    
    function addProperty(newProperty){
        axios.post("/properties",newProperty)
        .then(res => {
            setProperty(prevProperty => [...prevProperty, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteProperty(PropertyId){
        axios.delete(`/properties/${PropertyId}`)
        .then(res => {
            setProperty(prevProperty => prevProperty.filter(property=>property._id !== PropertyId))
        })
        .catch(err => console.log(err))
    }

    function editProperty(updates, PropertyId){
        axios.put(`/properties/${PropertyId}`, updates)
        .then(res => {
            console.log(res.data)
            setProperty(prevProperty => prevProperty.map(property => property._id !== PropertyId ? property : res.data))
            console.log(res.data)
        })
        .catch(err=>console.log(err))
}

    useEffect(() => {
       getProperty()
    },[]) 
  return (
    <div>
        <div className="grid-container">
      <div className="menu"> 
        
        <AddPropertyForm
            submit={addProperty} btnText="Add Property"
        /></div>
        <div className="main">{
            property.map(property=> 
                <Properties
                    {...property}
                    key={property._id}
                    deleteProperty={deleteProperty}
                    editProperty={editProperty}
                    />)
                    
            }</div>
        <div className="right">
            <SeacrhbyRent 
                submit={searchByRent}
            />
             <SearchBedRoom 
                submit={searchByBedroomSize}
            />
              <button onClick={getProperty}>Reset Property List</button>    
            
            {/* <FilterBySaved 
                submit={filterBySaved}
            /> */}</div>
    </div></div>
  )
}
