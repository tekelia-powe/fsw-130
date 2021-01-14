const express = require('express');
const propRouter = express.Router();
const uuidV4 = require('uuid.v4')

const properties =[
    {_id: uuidV4(), address:"123 Anywhere Street", size:"3", limit: "925", location: "36605"},
    
        ]
//getAll
propRouter.get("/", (req,res) =>{
    res.status(200).send(properties)
    })

//add new properties to array
propRouter.post("/", (req, res) => {
    const newProperties = req.body
    newProperties._id=uuidV4()
    properties.push(newProperties)
    res.status(201).send(newProperties)

})

//delete one
propRouter.delete("/:propertiesId", (req,res) => {
    const propertiesId = req.params.propertiesId
    const propertiesIndex = properties.findIndex(properties => properties._id === propertiesId)
    properties.splice(propertiesIndex,1)
    res.send("Successfully deleted the properties!")

})

//update one
propRouter.put("/:userId", (req, res) => {

    const userId = req.params.userId
    console.log(userId)
    const propertiesIndex = properties.findIndex(user => user._id === userId)
    const updatedProperties = Object.assign(properties[propertiesIndex], req.body)
    res.status(201).send(updatedProperties)
})

//search by rent limit
propRouter.get("/search/limit/:searchItem", (req,res, next) => {
    const limit = req.params.searchItem
    console.log(limit)
    if(!limit){
        const err = new Error("You must enter a Rent Amount.")
        res.status(500)
        return next(err)
    }
    const filteredproperty = properties.filter(item => item.limit <= limit)
    res.send(filteredproperty)
})

//search by bedroom size
propRouter.get("/search/size/:searchItem", (req,res, next) => {
    const size = req.params.searchItem
    
    if(!size){
        const err = new Error("You must enter a Bedroom Size.")
        res.status(500)
        return next(err)
    }
    const filteredproperty = properties.filter(item => item.size === size)
    res.send(filteredproperty)
})

//Get one
propRouter.get("/:itemId", (req, res, next) =>{
    const itemId = req.params.itemId 
    const foundItem = properties.filter(item => item._id===itemId)
    if(!foundItem){
        const err = new Error(`The Item with id #${itemId} was not found.`)
        res.status(500)
        return next(err)
    }
    res.status(200).send(foundItem)
    console.log(foundItem)
})

//filtered by saved
propRouter.get("/search/saved/:searchItem", (req,res, next) => {
    const saved = true
    
    if(!saved){
        const err = new Error("You must provide an option")
        res.status(500)
        return next(err)
    }
    const filteredproperty = properties.filter(item => item.saved === saved)
    res.status(200).send(filteredproperty)
})  


module.exports = propRouter