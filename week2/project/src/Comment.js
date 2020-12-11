import React, {useContext, useState, useRef} from 'react'
import {AppContext} from './AppContext'

const Comment = ({itemId, id, comment}) => {
  const {value, value2} = useContext(AppContext);
  const [items, setItems] = value;
  const [comments, setComments] = value2;
  const [edit,setEdit] = useState(false);
  const commentRef = useRef();

  const handleDelete = (e) => {
    
    const newItem = [...comments]
      // remove selected id from list and prints new list
      const updatedList = newItem.filter(comment => comment.id !== id)
      console.log(comment.id, id, updatedList)
      setComments(updatedList) 
  }
  const editClicked = (e) => {
    setEdit(!edit)
    console.log(!edit,"test")
    //handleEdit();
  }

//   function saveHandler(el){
//     const comment = commentRef.current.value;
    
//     if(edit){
      
//     //maps items array and update any items that changed 
//     if(el.id===id){
//     setComments(comments.map((el) => {
//       console.log(el.id, id,"test")
              
//             return{
//                 ...el,
//                  comment: comment,
//                   }
//                   return el;
//                 }
        
        
//     ))
//     setEdit(!edit)  
// };};}

function saveHandler(){
  const comment = commentRef.current.value;

  console.log("Items entered: "+comment)
  if(edit){
    console.log("Edit comment id "+id+" and saved items")
  //maps items array and update any items that changed 
  setComments(comments.map((el) => {
      if(el.id===id){
          console.log("el.id: "+el.id, "ID: "+id)
          return{
              ...el,
               comment: comments
              
          };
          console.log(el)
      }
      return el;
      
  })
  );
};
setEdit(!edit)
console.log("Set edit back to "+!edit)
};



  return (
    <div>
        {!edit ? (
     <form>
     <div className="container">
      {comment} <button id={id} onClick={handleDelete}>Delete</button></div></form>
      ) : (
        <>
          {" "}
          <form>
          <input
            ref={commentRef}
            type="text"
            defaultValue={comment}
            name="comment"
            

          />
         
          <button onClick={saveHandler}>
            Save
          </button>
          </form>
        </>
      )}
    </div>
  )
}

export default Comment;