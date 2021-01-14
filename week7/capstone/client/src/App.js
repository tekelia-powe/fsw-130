import React,{useState, useEffect} from 'react'
import axios from 'axios'
import User from './components/User.js'
import './App.css'
import AddUserForm from './components/AddUserForm.js'
//import pic1 from './images/contact.jpg'
import SeacrhbyRentLimit from './components/SeacrhbyRentLimit.js'
import SearchBedRoomSize from './components/SearchBedRoomSize.js'
import Header from './components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserMain from './components/UserMain'
import Home from './components/Home.js'
import {Switch, Route} from "react-router-dom"
import PropertyMain from './components/PropertyMain'
import Combined from './components/Combined.js'

export default function App(props){

    return(
        <>
       <div className="home-container">
        <div className="header"> <Header /> </div>
        <div className="main">     
            <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/user">
     
            <UserMain/>
           
      </Route>

      <Route path="/properties">
        <PropertyMain />
      </Route>

      <Route path="/combined">
        <Combined />
      </Route>

    </Switch>
    </div>
        <div className="footer">FSW-130 Capstone Project<br></br>2021</div>
        </div>
        </>

    )



}