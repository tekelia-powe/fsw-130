import React, { useContext, useState,useRef } from 'react'
import ItemList from './ItemList';
import pic1 from './ugly_car.jpg'
// import pic2 from './ugly_car2.jpg'
// import pic3 from './ugly_house.jpg'
import pic2 from './ugly_house2.jpg'
import {AppContext} from './AppContext'
import CommentList from './CommentList'
import AddCommentItem from './AddCommentItem';

const Item = ({id,title,description, imgURL}) => {
  const whichPic = imgURL === "ugly_car.jpg" ? pic1: pic2
  const {value, value2} = useContext(AppContext);
  const [items, setItems] = value;
  const [comments, setComments] = value2;
  const [edit,setEdit] = useState(false);
  const [commentAdded,setCommentAdded] = useState(false);
  const titleRef = useRef();
  const imageRef = useRef();
  const descRef = useRef();
  let itemId = 0;
  const handleDelete = (e) => {
    
    const newItem = [...items]
      // remove selected id from list and prints new list
      const updatedList = newItem.filter(item => item.id !== id)
      setItems(updatedList) 
      console.log("deleted element "+id)
  }

  const editClicked = (e) => {
    setEdit(!edit)
    console.log("Changed edit boolean to "+!edit)
    //handleEdit();
  }

  function saveHandler(){
    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const description = descRef.current.value;
    console.log("Items entered: "+title,image,description)
    if(edit){
      console.log("Edit id "+id+" and saved items")
    //maps items array and update any items that changed 
    setItems(items.map((el) => {
        if(el.id===id){
            console.log("el.id: "+el.id, "ID: "+id)
            return{
                ...el,
                 title: title, imgURL: image, description: description,
                
            };
            
        }
        return el;
        
    })
    );
};
setEdit(!edit)
console.log("Set edit back to "+!edit)
  };

  const CommentHandler = (e) => {
    
    setCommentAdded(!commentAdded);
    console.log("Set comment boolean to "+!commentAdded+" for element "+id);
    
   };

  return (
    <div key={id}>
            {!edit ? (
        <div className="item">
        <h3>{title} </h3>
        <h5>{description}</h5>
         <img src = {whichPic} />
         <div className="button">
        <button onClick={handleDelete}>Delete</button><button onClick={editClicked}>Edit</button><button onClick={CommentHandler}>Add Comment</button>
         
          {commentAdded? (<AddCommentItem id={id}/>):""}</div>
         <br></br>
         
         </div>    
            
                   
        
      ) : (
        <form>
        <div className="container">
          {" "}
          <input
            ref={titleRef}
            type="text"
            defaultValue={title}
            name="title"
            

          />
          <input
            ref={imageRef}  
            type="text"
            defaultValue={imgURL}
            name="imgUrl"
            
          />
          <input
            ref={descRef}
            type="text"
            defaultValue={description}
            name="description"
            
          />
         
          <button type="submit" onClick={saveHandler}>
            Save
          </button>
        </div></form>
      )}
    </div>
  );
};

export default Item