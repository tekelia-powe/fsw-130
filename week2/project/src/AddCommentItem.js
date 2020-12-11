import React,{useState,useContext} from 'react'
import {AppContext} from './AppContext'
import CommentList from './CommentList';

const AddCommentItem = ({id}) => {
  const {value, value2} = useContext(AppContext);
    const [items, setItems] = value;
    const [comments, setComments] = value2;
    const [comment, setComment] = useState(['']);
  
  const commentId = (comments.length)+1
    
  const updateComment = e => {
    setComment(e.target.value)
    console.log("typing in comment field for element "+id)
    
}

const addItem = e => {
  e.preventDefault();
  setComments(prevComments => [...prevComments, {id:commentId, comment: comment}])
  setComment()
  console.log("Adding comment "+ commentId)
  
}

  return (
    <>
        <div className="container">
        <form onSubmit={addItem}>
        
        <input type="text" name="comment" onChange={updateComment}></input>
      <button>Add</button></form>
      </div>
      <div className="item">
      
      <CommentList />
      </div>
        
    
  </>
  )
}
export default AddCommentItem;
