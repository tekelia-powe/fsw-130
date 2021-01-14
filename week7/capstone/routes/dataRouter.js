const express = require('express');
const dataRouter = express.Router();
const uuidV4 = require('uuid.v4')

const users =[
    {_id: uuidV4(), fullName:"Tekelia Powe", size:"3", limit: "925", location: "36605"},
    
        ]
//getAll
dataRouter.get("/", (req,res) =>{
    res.status(200).send(users)
    })

//add new users to array
dataRouter.post("/", (req, res) => {
    const newUsers = req.body
    newUsers._id=uuidV4()
    users.push(newUsers)
    res.status(201).send(newUsers)

})

//delete one
dataRouter.delete("/:usersId", (req,res) => {
    const usersId = req.params.usersId
    const usersIndex = users.findIndex(users => users._id === usersId)
    users.splice(usersIndex,1)
    res.send("Successfully deleted the users!")

})

//update one
dataRouter.put("/:userId", (req, res) => {

    const userId = req.params.userId
    console.log(userId)
    const usersIndex = users.findIndex(user => user._id === userId)
    const updatedUsers = Object.assign(users[usersIndex], req.body)
    res.status(201).send(updatedUsers)
})

//search by rent limit
dataRouter.get("/search/limit/:searchItem", (req,res, next) => {
    const limit = req.params.searchItem
    console.log(limit)
    if(!limit){
        const err = new Error("You must enter a Rent Amount.")
        res.status(500)
        return next(err)
    }
    const filteredData = users.filter(item => item.limit <= limit)
    res.send(filteredData)
})

//search by bedroom size
dataRouter.get("/search/size/:searchItem", (req,res, next) => {
    const size = req.params.searchItem
    
    if(!size){
        const err = new Error("You must enter a Bedroom Size.")
        res.status(500)
        return next(err)
    }
    const filteredData = users.filter(item => item.size === size)
    res.send(filteredData)
})

//Get one
dataRouter.get("/:itemId", (req, res, next) =>{
    const itemId = req.params.itemId 
    const foundItem = users.filter(item => item._id===itemId)
    if(!foundItem){
        const err = new Error(`The Item with id #${itemId} was not found.`)
        res.status(500)
        return next(err)
    }
    res.status(200).send(foundItem)
    console.log(foundItem)
})

//filtered by saved
dataRouter.get("/search/saved/:searchItem", (req,res, next) => {
    const saved = true
    
    if(!saved){
        const err = new Error("You must provide an option")
        res.status(500)
        return next(err)
    }
    const filteredData = users.filter(item => item.saved === saved)
    res.status(200).send(filteredData)
})  


module.exports = dataRouter