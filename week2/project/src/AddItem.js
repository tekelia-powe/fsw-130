import React, {useState, useContext} from 'react'
import {AppContext} from './AppContext';



const AddItem = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgURL, setURL] = useState ('')
    const {value, value2} = useContext(AppContext);
    const [items, setItems] = value;
    const [comments, setComments] = value2;
    
    const id = (items.length)+1
    
    const updateTitle = e => {
        setTitle(e.target.value)
    }

    const updateDescription = e => {
        setDescription(e.target.value)
    }
    
    const updateURL = e => {
        setURL(e.target.value)
    }

    const addItem = e => {
        e.preventDefault();
        setItems(prevItems => [...prevItems, {id:id, title: title, description:description, imgURL:imgURL}])
        setTitle('')
        setDescription('')
        setURL('')
        console.log("Added another element "+id)
    }

  return (
    <form onSubmit={addItem}>
        <div className="container">
        <h3>Title:</h3><input type="text" name="title" value={title} onChange={updateTitle} />
        <h3>Description: </h3><input type="text" name="description" value={description} onChange={updateDescription} />
        <h3>URL:</h3><input type="text" name="imgURL" value={imgURL} onChange={updateURL} /><br></br>
        <button>Add Item</button>
        </div>
    </form>
  )
}
export default AddItem
